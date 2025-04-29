import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
// import { FrappeProvider } from "frappe-react-sdk";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import AppProvider from "./contexts/AppContext.tsx";
import FormsProvider from "./contexts/FormsContext.tsx";
import ModalsProvider from "./contexts/ModalsContext.tsx";
import "./index.css";
import { router } from "./router.tsx";
import { store } from "./store/store.tsx";
import { theme } from "./theme.tsx";

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
        <FormsProvider>
          <ModalsProvider>
            <AppProvider>
              {/* <FrappeProvider url={`https://cp-staging.gettuba.com`}> */}
                <RouterProvider router={router} />
              {/* </FrappeProvider> */}
            </AppProvider>
          </ModalsProvider>
        </FormsProvider>
      </Provider>
    </ThemeProvider>
  </CacheProvider>
);
