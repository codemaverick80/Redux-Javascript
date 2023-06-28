import { render } from "preact";
import { Provider } from "react-redux";
import store from "./app/store";
import { App } from "./app.jsx";
import "./index.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
