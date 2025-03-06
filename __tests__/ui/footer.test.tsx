import { render, screen } from "@testing-library/react";
import Footer from "@/components/layout/footer/footer";

describe("Footer", () => {
  it("renders copyright text", () => {
    render(<Footer />);

    const copyrightText = screen.getByText(
      "© 2024 Next Blog. All rights reserved."
    );
    expect(copyrightText).toBeInTheDocument();
  });
});
