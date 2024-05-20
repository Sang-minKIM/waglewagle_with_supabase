import React from "react";

import { ThemeProvider } from "@emotion/react";
import type { Preview } from "@storybook/react";

import { theme } from "../src/style/theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators: Array<(Story: React.ComponentType) => JSX.Element> = [
  (Story: React.ComponentType) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

export default preview;
