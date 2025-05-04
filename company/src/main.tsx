import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { router } from "./router.tsx";
import { store } from "./store/store.tsx";
import { theme } from "./theme.tsx";
import "./index.css";
import { TabsProvider } from "./contexts/TabsContext.tsx";
import { ModalsProvider } from "./contexts/ModalsContext.tsx";
import { FormsProvider } from "./contexts/FormsContext.tsx";
import { Toaster } from "react-hot-toast";

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
        <ModalsProvider>
          <TabsProvider>
            <FormsProvider>
              <RouterProvider router={router} />
              <Toaster />
            </FormsProvider>
          </TabsProvider>
        </ModalsProvider>
      </Provider>
    </ThemeProvider>
  </CacheProvider>
);
