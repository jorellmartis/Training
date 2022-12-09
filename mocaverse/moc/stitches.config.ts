import { createStitches } from "@stitches/react";
import uiButtonConfig, { buttonConfigLight } from "@/config/ui.button.config";
import uiTypographyConfig from "@/config/ui.typography.config";
import uiSidebarConfig from "@/config/ui.sidebar.config";
import uiTopbarConfig from "./config/ui.topbar.config";
import uiRightbarConfig from "./config/ui.rightbar.config";
import uiCardConfig from "./config/ui.card.config";
import uiBadgeConfig from "./config/ui.badge.config";
import uiSeparatorConfig from "./config/ui.separator.config";
import uiSpacingsCommonConfig from "./config/ui.spacings.common.config";
import uiSliderConfig from "./config/ui.slider.config";
import uiAccordionConfig from "./config/ui.accordion.config";
import uiTabsConfig from "./config/ui.tabs.config";
import uiProgressConfig from "./config/ui.progress.config";

import colorsServicesConfig from "./config/colors.services.config";

const commonStyles = {
  transitions: {
    basic: "all .3s",
  },
  radius: {
    sm: "5px",
    md: "10px",
    lg: "20px",
    circle: "50%",
  },
  button: {
    ...uiButtonConfig,
    ...buttonConfigLight,
  },
  typography: uiTypographyConfig,
  sidebar: uiSidebarConfig,
  topbar: uiTopbarConfig,
  rightbar: uiRightbarConfig,
  card: uiCardConfig,
  badge: uiBadgeConfig,
  separator: uiSeparatorConfig,
  spacings: uiSpacingsCommonConfig,
  slider: uiSliderConfig,
  accordion: uiAccordionConfig,
  tabs: uiTabsConfig,
  progressBar: uiProgressConfig,
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: "#0065F2",
      primary100: "rgba(0, 101, 242, 0.1)",
      secondary: "#EAF3FF",
      gray400: "gainsboro",
      gray500: "lightgray",
      white: "#ffffff",
      white100: "rgba(255,255,255, 0.1)",
      black: "#000000",
      black200: "rgba(0,0,0,0.2)",
      black160: "rgba(0,0,0,0.16)",
      dark: "rgba(23, 27, 30, 1)",
      dark800: "rgba(23, 27, 30, 0.8)",
      ...colorsServicesConfig,
    },
    page: {
      background: "#2A363C",
    },
    ...commonStyles,
  },
  media: {
    bp1: "(min-width: 480px)",
  },
});

export const darkTheme = createTheme({
  colors: {
    primary: "#0065F2",
    primary100: "rgba(0, 101, 242, 0.1)",
    gray400: "gainsboro",
    gray500: "lightgray",
    white: "#ffffff",
    white100: "rgba(255,255,255, 0.1)",
    black: "#000000",
    black200: "rgba(0,0,0,0.2)",
  },
  page: {
    background:
      "linear-gradient(0deg, rgba(0, 101, 242, 0.05), rgba(0, 101, 242, 0.05)), #FFFFFF",
  },
  ...commonStyles,
});

export const globalStyles = globalCss({
  ":root": {
    fontSize: "10px",
  },
  body: {
    margin: 0,
    background: theme.page.background,
    color: theme.colors.white,
    backgroundAttachment: "fixed",
  },
  section: {
    paddingTop: "20px",
    paddingBottom: "20px",
    [">h1,>h2,>h3,>h4,>h5,>h6"]: {
      marginBottom: "20px!important",
    },
  },
});
