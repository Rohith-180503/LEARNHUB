import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import App from "./App.jsx";

function renderApp(initialPath = "/") {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>
  );
}

describe("Online Learning App", () => {
  test("renders My Cart heading", () => {
    renderApp();
    expect(screen.getByRole("heading", { name: /my cart/i })).toBeInTheDocument();
  });

  test("renders at least one course on home", () => {
    renderApp("/");
    expect(
      screen.getByText(/Complete Linux Training/i)
    ).toBeInTheDocument();
  });

  test("Add to cart button is present", () => {
    renderApp("/");
    expect(
      screen.getAllByRole("button", { name: /add to cart/i })[0]
    ).toBeInTheDocument();
  });
});
