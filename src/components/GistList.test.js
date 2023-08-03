import { render } from "@testing-library/react";
import GistList from "./GistList";
import store from "./../redux/store";
import { Provider } from "react-redux";

test("GistListRendering", () => {
  const { container } = render(
    <Provider store={store}>
      <GistList />
    </Provider>
  );
  expect(container).toBeVisible();
});
