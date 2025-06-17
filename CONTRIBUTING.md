下面是一个适用于 MateChat React 的开源贡献指南 `CONTRIBUTING.md`，遵循 GitHub 开源最佳实践，参考 VTable 和其他 DevUI 生态项目：

---

````markdown
# 🤝 Contributing to MateChat React

Welcome! We’re excited that you’re interested in contributing to **MateChat React** 🎉

Whether it's fixing bugs, suggesting features, improving documentation, or creating pull requests — your help is appreciated. This guide will help you get started smoothly.

---

## 📋 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [Getting Started](#-getting-started)
- [Development Workflow](#-development-workflow)
- [Commit Convention](#-commit-convention)
- [Pull Request Guidelines](#-pull-request-guidelines)
- [Documentation](#-documentation)
- [Feedback & Discussions](#-feedback--discussions)

---

## 📜 Code of Conduct

Please make sure to read and follow our [Code of Conduct](./CODE_OF_CONDUCT.md) before participating in this project.

We are committed to providing a friendly, safe and welcoming environment for everyone.

---

## 🧰 Getting Started

1. **Fork** this repo and **clone** your fork.

```bash
git clone https://github.com/your-username/matechat-react.git
cd matechat-react
pnpm install
````

2. **Start dev mode**

```bash
pnpm dev
```

3. **Explore the Storybook playground**

```bash
pnpm storybook
```

You're now ready to develop components or fix bugs locally.

---

## 🔁 Development Workflow

We use [pnpm](https://pnpm.io) as our package manager and monorepo tool.

* Components are located under `src/components/`
* Shared utilities go in `src/utils/`
* Types live in `src/types/`
* Storybook stories live under `src/**/demo/`

To test components, create `.stories.tsx` or `.demo.tsx` files and use them inside Storybook.

---

## 📦 Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages. Use the following structure:

```bash
<type>(scope): description
```

Examples:

* `feat(chat): add emoji picker support`
* `fix(prompt-editor): handle Enter key when empty`
* `docs(readme): add contributing section`

Valid types include: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `build`, `ci`.

This ensures changelogs and versioning are automated.

---

## ✅ Pull Request Guidelines

* PRs must be **atomic and focused** (1 PR = 1 purpose)
* Run `pnpm lint` and `pnpm format` before committing
* Add unit tests or Storybook demos if applicable
* If you are fixing a bug, please describe the steps to reproduce it
* If UI-related, include screenshots or videos in the PR description
* Reference related issues using `Fixes #123` syntax

---

## 📖 Documentation

All component documentation lives in the `/docs` directory. We use [Rspress](https://rspress.dev) for the documentation site.

To preview the site:

```bash
pnpm build
pnpm docs
```

Documentation contributions are welcome! Please follow existing patterns.

---

## 💬 Feedback & Discussions

For questions, feature proposals, or community discussions:

* Open an issue on GitHub
* Use GitHub Discussions (if enabled)
* Or contact us via [matechat.dev](https://matechat.dev)

---

Thank you again for being part of the MateChat React community 💙

Happy hacking! 🚀

