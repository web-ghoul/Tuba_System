import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { FrappeProvider } from "frappe-react-sdk";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { router } from "./router.tsx";
import { store } from "./store/store.tsx";
import { theme } from "./theme.tsx";
import "./index.css";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

// const cacheLtr = createCache({
//   key: "mui",
// });

createRoot(document.getElementById("root")!).render(
  <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <FrappeProvider url={`http://erp-staging.gettuba.com/api/v2`}>
          <RouterProvider router={router} />
        </FrappeProvider>
      </Provider>
    </ThemeProvider>
  </CacheProvider>
);
