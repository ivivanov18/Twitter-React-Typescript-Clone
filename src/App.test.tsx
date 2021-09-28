import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import AppProviders from "./AppProviders";

test("renders learn react link", () => {
  render(
    <AppProviders>
      <App />
    </AppProviders>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
