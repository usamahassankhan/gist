import { render } from "@testing-library/react";
import Search from "./Search";

test("SearchRendering", () => {
  const { container } = render(<Search />);
  expect(container).toBeVisible();
});
