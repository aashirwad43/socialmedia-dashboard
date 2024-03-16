import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ResponsiveAppBar from "./components/navbar/navbar.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ResponsiveAppBar />
      <App />
    </Provider>
  </React.StrictMode>
);
