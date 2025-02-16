import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import "./index.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

const theme = createTheme({
  autoContrast: true,
  fontFamily: "poppins",
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
    </Provider>
  </StrictMode>
);
