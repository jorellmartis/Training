// TODO: Make the imports dynamic later
import { useContext } from "react";
import { styled, theme } from "@/stitches";
import SidebarBlockServices from "@/components/BlocksSidebar/SidebarBlockServices";
import SidebarBlockContacts from "@/components/BlocksSidebar/SidebarBlockContacts";
import SidebarBlockAnnouncements from "@/components/BlocksSidebar/SidebarBlockAnnouncements";
import { Check } from "@/components/Icons/Navigation";
import Avatar from "@/components/UIKit/Avatar";
import SquircleCard from "@/components/UIKit/Squircle";
import { AppContext } from "@/pages/_app";

const RightBarStyled = styled(SquircleCard, {
  position: "fixed",
  height: theme.rightbar.userBarHeight,
  top: theme.rightbar.offset,
  right: theme.rightbar.offset,
  padding: 0,
  zIndex: 2,
  width: theme.rightbar.width,
  background: theme.rightbar.background,
  overflow: "hidden",
  transition: "height 0.7s ease",
  willChange: "height",
  ["&.active"]: {
    height: `calc(100% - 20px)`,
  },
  "> div": {
    // marginBottom: theme.rightbar.spaceBetween,
  },
});

const Userbar = styled("div", {
  padding: theme.rightbar.userBarPadding,
  width: "100%",
  height: theme.rightbar.userBarHeight,
  marginInlineStart: "auto",
  display: "flex",
  alignItems: "center",
  columnGap: 26,
  justifyContent: "space-between",
});

const SidebarWrapper = styled("div", {
  overflowY: "auto",
  height: "100%",
  padding: "25px",
  paddingBottom: theme.topbar.height,
});

const Rightbar = () => {
  const AppCtx = useContext(AppContext);

  return (
    <RightBarStyled
      cornerRadius={15}
      className={AppCtx?.rightbarVisible ? "active" : ""}
    >
      <Userbar>
        <a>
          <Check />
        </a>
        <a>
          <Check />
        </a>
        <a onClick={() => AppCtx?.setRightBarVisible(!AppCtx?.rightbarVisible)}>
          <Check />
        </a>
        <Avatar size={40} />
      </Userbar>
      {/* {rightbarVisible ? ( */}
      <SidebarWrapper>
        <SidebarBlockServices />
        <SidebarBlockContacts />
        <SidebarBlockAnnouncements />
      </SidebarWrapper>
      {/* ) : null} */}
    </RightBarStyled>
  );
};

export default Rightbar;
