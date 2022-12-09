import { VariantProps } from "@stitches/react";
import { styled, theme } from "@/stitches";
import Typography from "@/components/UIKit/Typography";

import t from "@/utils/t";

const TopbarStyled = styled("nav", {
  height: theme.topbar.height,
  background: theme.topbar.background,
  padding: theme.topbar.padding,
  position: "fixed",
  width: `calc(100% - calc(${theme.sidebar.minimizedContentOffset} + ${theme.sidebar.minimizedOffset}))`,
  top: 0,
  zIndex: 2,
  left: `calc(${theme.sidebar.minimizedContentOffset} + ${theme.sidebar.minimizedOffset})`,
  transition: theme.transitions.basic,

  display: "flex",
  alignItems: "center",
  ["&.sidebar-active"]: {
    // width: `calc(100% - ${theme.sidebar.width})`,
    // left: theme.sidebar.width,
    width: `calc(100% - calc(${theme.sidebar.width} + ${theme.sidebar.minimizedOffset}))`,
    left: `calc(${theme.sidebar.width} + ${theme.sidebar.minimizedOffset})`,
  },
});

interface TopbarProps extends VariantProps<typeof TopbarStyled> {
  sidebarVisible?: boolean;
}
const Topbar = ({ sidebarVisible }: TopbarProps) => {
  return (
    <TopbarStyled className={sidebarVisible ? "sidebar-active" : ""}>
      <Typography level={1} as="h1">
        {t("Dashboard.GreetingMorning", { name: "Niel" })}
      </Typography>
      <input id="search" />
    </TopbarStyled>
  );
};

export default Topbar;
