import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import Cookies from 'js-cookie';
import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FrappeProvider } from "frappe-react-sdk";
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
import AuthLoader from "./AuthLoader.tsx";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const queryClient = new QueryClient();

// const cacheLtr = createCache({
//   key: "mui",
// });
const getTokenFromLocalStorage = () => {
  return "sd"
}
createRoot(document.getElementById("root")!).render(
  
  

    <QueryClientProvider client={queryClient}>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <FormsProvider>
              <ModalsProvider>
                <AppProvider>
                  {/* <FrappeProvider url={`https://cp-staging.gettuba.com`}> */}
                  <AuthLoader> {/* ✅ wrap just this */}
                    <RouterProvider router={router} />
                  </AuthLoader>
                  {/* </FrappeProvider> */}
                </AppProvider>
              </ModalsProvider>
            </FormsProvider>
          </Provider>
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
 
);
