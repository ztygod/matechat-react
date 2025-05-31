import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { type ProgressBar, createSpinner } from "archons";
import chalk from "chalk";

function isIgnored(filename: string) {
  for (const pattern of ignored) {
    if (filename.includes(pattern)) {
      return true;
    }
  }
  return false;
}

function tryBuild(cmd: string, msg: string, spinner: ProgressBar) {
  try {
    spinner.setMessage(`${msg}`);
    execSync(cmd, { stdio: "inherit" });
  } catch (e) {
    console.log(e);
    spinner.println("[MateChat] Build failed.");
  }
}

function createArchonsSpinner() {
  const spinner = createSpinner();
  spinner.setTemplate("{prefix:.green} {spinner:.yellow} {msg}");
  spinner.setPrefix("[MateChat]");
  return spinner;
}

const cwd = process.cwd();
const dirPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../src",
);
const ignored = [
  "node_modules",
  ".git",
  ".github",
  ".vscode",
  "dist",
  "build",
  "bin",
  ".md",
  ".d.ts",
  "target",
  ".cjs",
];
const greenPrefix = chalk.green("[MateChat]");

const spinner = createArchonsSpinner();
spinner.enableSteadyTick(100);
spinner.setMessage("Initial building...");
tryBuild("pnpm build", "Building...", spinner);
spinner.finishAndClear();
console.clear();
console.log(`${greenPrefix} Build complete.\n`);
console.log(
  `${greenPrefix} Watching on ${chalk.cyan(path.relative(cwd, dirPath))} for changes...`,
);

let lastBuild = Date.now();
fs.watch(dirPath, { recursive: true }, (eventType, filename) => {
  if (Date.now() - lastBuild < 1000) {
    return;
  }
  if (filename && !isIgnored(filename)) {
    const spinner = createArchonsSpinner();
    spinner.println(
      `${greenPrefix} File ${chalk.cyan(filename)} was ${eventType}d, rebuilding...`,
    );
    spinner.enableSteadyTick(100);
    if (filename.endsWith(".ts") || filename.endsWith(".tsx")) {
      tryBuild("pnpm build", "Rebuilding...", spinner);
    }
    console.clear();
    spinner.println(`${greenPrefix} Build complete.\n\n`);
    spinner.println(
      `${greenPrefix} Watching on ${chalk.cyan(path.relative(cwd, dirPath))} for changes...`,
    );
    spinner.finishAndClear();
    lastBuild = Date.now();
  }
});
