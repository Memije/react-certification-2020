import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button component", () => {
  it("renders button correctly", () => {
    render(<Button data-testid="button" />);
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });
});
