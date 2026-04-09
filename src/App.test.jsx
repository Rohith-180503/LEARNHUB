import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import App from "./App.jsx";

function renderApp(initialPath = "/") {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>
  );
}

beforeEach(() => {
  localStorage.clear();
  window.confirm = vi.fn(() => true);
  Element.prototype.scrollIntoView = vi.fn();
});

describe("Online Learning App", () => {
  test("renders home and cart heading", () => {
    renderApp();

    expect(
      screen.getByRole("heading", { name: /build skills that/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /my cart/i })
    ).toBeInTheDocument();
  });

  test("lets keyboard users open navbar menus and reach nested routes", async () => {
    renderApp();

    const exploreButton = screen.getByRole("button", { name: /explore courses/i });
    fireEvent.click(exploreButton);
    fireEvent.click(screen.getByRole("menuitem", { name: /modern web stack/i }));

    expect(
      screen.getByRole("heading", { name: /advanced web stack engineering/i })
    ).toBeInTheDocument();
  });

  test("adds a course to the cart and shows consistent pricing", async () => {
    renderApp("/");

    fireEvent.click(screen.getAllByRole("button", { name: /add to cart/i })[0]);

    expect(screen.getByText(/1 course/i)).toBeInTheDocument();
    expect(screen.getByText(/subtotal: \$49\.99/i)).toBeInTheDocument();
    expect(screen.getByText(/discount: -\$0\.00/i)).toBeInTheDocument();
    expect(screen.getByText(/platform fee: \$2\.99/i)).toBeInTheDocument();
    expect(screen.getByText(/\$52\.98/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /shopping cart, 1 item/i }));
    expect(screen.getAllByText("$52.98").length).toBeGreaterThan(0);
  });

  test("renders even if theme storage is blocked", () => {
    const getItemSpy = vi
      .spyOn(Storage.prototype, "getItem")
      .mockImplementation(() => {
        throw new Error("blocked");
      });

    const setItemSpy = vi
      .spyOn(Storage.prototype, "setItem")
      .mockImplementation(() => {
        throw new Error("blocked");
      });

    renderApp();

    expect(
      screen.getByRole("button", { name: /switch to dark theme/i })
    ).toBeInTheDocument();

    getItemSpy.mockRestore();
    setItemSpy.mockRestore();
  });
});
