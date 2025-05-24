import type { StorybookConfig } from "@storybook/html-vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@whitespace/storybook-addon-html",
    "@storybook/addon-interactions",
    "@storybook/addon-google-analytics",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
};
export default config;
