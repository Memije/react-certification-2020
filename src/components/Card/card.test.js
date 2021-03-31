import React from "react";
import { render, screen } from "@testing-library/react";
import Card from ".";
const testText = "test title";
const testId = "testid";

describe("Card component", () => {
  it("renders the card correctly", () => {
    render(<Card />);
  });

  it("renders the card title as channel URL", () => {
    render(
      <Card title={testText} itemKind="youtube#channel" itemId={testId} />
    );
    const title = screen.getByText(testText);
    expect(title).toHaveAttribute(
      "href",
      `https://youtube.com/channel/${testId}`
    );
  });

  it("renders the card title as video URL", () => {
    render(<Card title={testText} itemKind="youtube#video" itemId={testId} />);
    const title = screen.getByText(testText);
    expect(title).toHaveAttribute(
      "href",
      `https://youtube.com/watch?v=${testId}`
    );
  });
});
