/**
 *
 *
 * Tests for <App />
 *
 *
 */
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("should not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    render(<App />);
    expect(spy).not.toHaveBeenCalled();
  });

  it("should have content", () => {
    const { getByText } = render(<App />);
    expect(getByText(/it works!/i)).toBeInTheDocument();
  });
});
