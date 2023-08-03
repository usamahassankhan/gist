import { render } from "@testing-library/react";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "./../redux/store";

test("HeaderRendering", () => {
  const { container } = render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
  expect(container).toBeVisible();
});
