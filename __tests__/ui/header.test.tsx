import Header from "@/components/layout/header/header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  it("renders heading with navbar menu", () => {
    render(<Header />);

    const heading = screen.getByRole("heading", { name: /next blog/i });

    expect(heading).toBeInTheDocument();

    const navLinks = screen.getAllByRole("link");

    expect(navLinks).toHaveLength(2);
    expect(navLinks[0]).toHaveTextContent("Home");
    expect(navLinks[1]).toHaveTextContent("About");
    expect(navLinks[0]).toHaveAttribute("href", "/");
    expect(navLinks[1]).toHaveAttribute("href", "/about");
  });
});
