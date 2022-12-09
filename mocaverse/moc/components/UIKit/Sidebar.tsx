import { useState } from "react";
import Link, { LinkProps } from "next/link";
import { VariantProps } from "@stitches/react";

import { styled, theme } from "@/stitches";
import {
  Hamburger,
  Logo,
  NavHome,
  LogoVertical,
} from "@/components/Icons/Navigation";
import SquircleCard from "@/components/UIKit/Squircle";
import listSidebarConfig, { footerLinks } from "@/config/list.sidebar.config";
import t from "@/utils/t";

const SidebarStyled = styled(SquircleCard, {
  // height: "100%",
  bottom: theme.sidebar.minimizedOffset,
  top: theme.sidebar.minimizedOffset,
  left: theme.sidebar.minimizedOffset,
  backdropFilter: "blur(8.5px)",
  height: `calc(100% - 20px)`,
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  width: theme.sidebar.width,
  background: theme.sidebar.background,
  overflowY: "auto",
  borderRadius: theme.sidebar.borderRadius,
  transition: theme.transitions.basic,
  [".hide-on-min"]: {
    opacity: "1",
    transition: theme.transitions.basic,
  },
  [".show-on-min"]: {
    opacity: "0",
    transition: theme.transitions.basic,
  },
  ["&.minimized"]: {
    width: theme.sidebar.widthMinimized,
    [".hide-on-min"]: {
      // display: "none",
      opacity: "0",
    },
    [".show-on-min"]: {
      opacity: "1",
      transition: theme.transitions.basic,
    },
  },
});

const SidebarHeader = styled("div", {
  padding: theme.sidebar.headerPadding,
  display: "flex",
  alignItems: "center",
  borderBottom: `${theme.sidebar.borderBottomSize} solid ${theme.sidebar.borderColor}`,
  ["a:not(:first-child)"]: {
    marginInlineStart: theme.sidebar.logoSpace,
  },
  ["svg"]: {
    cursor: "pointer",
  },
});

const SidebarLinks = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginTop: theme.sidebar.linksMarginTop,
  marginBottom: theme.sidebar.linksMarginBottom,
  ["&.minimized a"]: {
    paddingInlineStart: theme.sidebar.linkIconOffsetLeftMinimized,
  },
});

const SidebarLink = styled("div", {
  marginTop: theme.sidebar.linkSpaceBetween,
  marginBottom: theme.sidebar.linkSpaceBetween,
  overflow: "hidden",
  ["a"]: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    flex: 1,
    width: theme.sidebar.width,
    fontSize: theme.sidebar.linkFontSize,
    color: theme.sidebar.linkFontColor,
    paddingInlineStart: theme.sidebar.linkIconOffsetLeft,
  },
  ["svg"]: {
    flex: "0 0 20px",
  },
  ["span"]: {
    paddingInlineStart: theme.sidebar.linkIconOffsetRight,
  },
});

const SidebarFooter = styled("div", {
  marginTop: "auto",
  paddingTop: theme.sidebar.footerPadding,
  paddingBottom: theme.sidebar.footerPadding,
  ["> a"]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const SubMenu = styled("ul", {
  listStyle: "none",
  flexDirection: "column",
  padding: 0,
  transition: theme.transitions.basic,
  display: "none",
  "&.active": {
    display: "flex",
  },
  "li a": {
    padding: 0,
  },
});

interface SidebarProps extends VariantProps<typeof SidebarStyled> {
  sidebarVisible?: boolean;
  setSidebarVisible?: any;
}

type LinkItemProps = {
  icon?: string;
  showPopup?: boolean;
  popupType?: string;
  href: string;
  label: string;
  subItems?: Array<LinkItemProps>;
};

const LinkItem = ({
  item,
  setOpenSubMenu,
  openSubMenu,
}: {
  item: LinkItemProps;
  setOpenSubMenu?: any;
  openSubMenu?: string;
}) => {
  return (
    <>
      {!item?.subItems?.length ? (
        <Link href={item.href}>
          {item?.icon ? <NavHome /> : null}
          <span className="hide-on-min">{t(item?.label)}</span>
        </Link>
      ) : (
        <a
          onClick={() =>
            setOpenSubMenu(openSubMenu === item?.label ? "" : item.label)
          }
        >
          {item?.icon ? <NavHome /> : null}
          <span className="hide-on-min">{t(item?.label)}</span>
        </a>
      )}
    </>
  );
};

const Sidebar = ({ setSidebarVisible, sidebarVisible }: SidebarProps) => {
  const [openSubMenu, setOpenSubMenu] = useState<string>("");
  return (
    <SidebarStyled
      className={sidebarVisible ? "" : "minimized"}
      cornerRadius={16}
    >
      <SidebarHeader>
        <a onClick={() => setSidebarVisible(!sidebarVisible)}>
          <Hamburger />
        </a>
        <Link href="/dashboard" className="hide-on-min">
          <Logo />
        </Link>
      </SidebarHeader>

      <SidebarLinks className={sidebarVisible ? "" : "minimized"}>
        {listSidebarConfig.map((item, index) => (
          <SidebarLink key={`sidebar-link-${index}`}>
            <LinkItem
              item={item}
              setOpenSubMenu={setOpenSubMenu}
              openSubMenu={openSubMenu}
            />
            {item?.subItems ? (
              <SubMenu className={openSubMenu === item?.label ? "active" : ""}>
                {item?.subItems?.map((subItem, i) => (
                  <li key={`sub-menu-${i}`}>
                    <LinkItem item={subItem} />
                  </li>
                ))}
              </SubMenu>
            ) : null}
          </SidebarLink>
        ))}
      </SidebarLinks>
      <SidebarFooter>
        <Link href="/dashboard" className="show-on-min">
          <LogoVertical />
        </Link>
        <SidebarLinks className={sidebarVisible ? "" : "minimized"}>
          {footerLinks.map((item) => (
            <SidebarLink key={item?.href}>
              <Link href={item?.href}>
                <NavHome />
                <span className="hide-on-min">{t(item?.label)}</span>
              </Link>
            </SidebarLink>
          ))}
        </SidebarLinks>
      </SidebarFooter>
    </SidebarStyled>
  );
};

export default Sidebar;
