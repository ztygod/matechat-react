import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Button } from "../dist/button";

test("button", () => {
  render(<Button variant="default">Default</Button>);

  const buttonElement = screen.getByText("Default");

  expect(buttonElement).toBeInTheDocument();
});
