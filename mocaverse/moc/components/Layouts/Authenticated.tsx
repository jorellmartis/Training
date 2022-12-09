// TODO: Move the context declaration to each component
import { useContext } from "react";
import { styled, theme } from "@/stitches";

import Sidebar from "@/components/UIKit/Sidebar";
import Rightbar from "@/components/UIKit/Rightbar";

import { AppContext } from "@/pages/_app";

const Content = styled("div", {
  transition: `margin 0.3s ease 0.3s`,
  marginInlineStart: theme.sidebar.minimizedContentOffset,
  marginInlineEnd: 0,
  // marginTop: theme.topbar.height,
  padding: "40px 72px",
  height: "100%",
  ["&.sidebar-active"]: {
    marginInlineStart: theme.sidebar.width,
  },
  ["&.rightbar-active"]: {
    marginInlineEnd: theme.rightbar.width,
    transition: "margin 0.3s ease",
  },
});

const Wrapper = styled("main", {
  height: "100vh",
});

type LayoutProps = {
  children: React.ReactNode;
};

const Authenticated = ({ children }: LayoutProps) => {
  const AppCtx = useContext(AppContext);

  return (
    <Wrapper>
      <Content
        className={`${AppCtx?.sidebarVisible ? "sidebar-active" : ""} ${
          AppCtx?.rightbarVisible ? "rightbar-active" : ""
        }`}
      >
        <Sidebar
          setSidebarVisible={AppCtx?.setSidebarVisible}
          sidebarVisible={AppCtx?.sidebarVisible}
        />
        {/* <Topbar sidebarVisible={AppCtx?.sidebarVisible} /> */}
        {children}
        <Rightbar />
      </Content>
    </Wrapper>
  );
};

export default Authenticated;
