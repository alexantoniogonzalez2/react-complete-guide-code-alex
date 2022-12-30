import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders good to see you if button was NOT clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const element = screen.getByText("good to see you!", {exact: false});
    expect(element).toBeInTheDocument();
  });

  test('renders changed! if button IS clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const element = screen.getByText("Changed!");
    expect(element).toBeInTheDocument();
  });

  test('does not render good to see you if button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const element = screen.queryByText("good to see you!", {exact: false});
    expect(element).not.toBeInTheDocument();
    expect(element).toBeNull();
  });
});
