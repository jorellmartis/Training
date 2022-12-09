import React, { useState, createContext } from "react";
// import { store } from "../store";
import { store } from "@/reduxStore";
import { Provider as ReduxProvider } from "react-redux";

import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { globalStyles } from "@/stitches";
import Authenticated from "@/components/Layouts/Authenticated";
import "../styles/grid.css";
import "../styles/globals.css";

type AppContextInterface = {
  theme: string;
  toggleTheme: (theme: string) => void;
  setSidebarVisible: (sidebarVisible: boolean) => void;
  setRightBarVisible: (rightbarVisible: boolean) => void;
  sidebarVisible: boolean;
  rightbarVisible: boolean;
};

export const AppContext = createContext<AppContextInterface | null>(null);

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const [theme, setTheme] = useState<string>("light");
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);
  const [rightbarVisible, setRightBarVisible] = useState<boolean>(true);

  const getLayout = Component.getLayout || ((page) => page);

  const toggleTheme = (forcedTheme: string) => {
    const newTheme = forcedTheme
      ? forcedTheme
      : theme == "light"
      ? "dark"
      : "light";
    setTheme(newTheme);
  };

  const AppContextFromProps: AppContextInterface = {
    theme,
    toggleTheme,
    sidebarVisible,
    setSidebarVisible,
    rightbarVisible,
    setRightBarVisible,
  };

  globalStyles();

  return (
    <AppContext.Provider value={AppContextFromProps}>
      <ReduxProvider store={store}>
        {Component.getLayout ? (
          getLayout(<Component {...pageProps} />)
        ) : (
          <Authenticated>
            <Component {...pageProps} />
          </Authenticated>
        )}
      </ReduxProvider>
    </AppContext.Provider>
  );
};

export default App;
