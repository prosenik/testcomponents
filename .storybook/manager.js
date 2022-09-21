import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";
import V3Logo from "./core/images/registerv3.png";

addons.setConfig({
  panelPosition: "bottom",
  theme: {
    ...themes.normal,
    brandTitle: "Ready2Order - React Component Lib",
    brandUrl: "Ready2Order.com",
    brandImage: V3Logo,

    colorPrimary: "#007dbc",
    colorSecondary: "#4e5d6b",

    // UI
    appBg: "white",
    appContentBg: "#eff1f3",
    appBorderRadius: 4,

    // Typography
    fontBase: '"Commissioner", Arial, Helvetica, sans-serif',
    fontCode: "monospace",
  },
});
