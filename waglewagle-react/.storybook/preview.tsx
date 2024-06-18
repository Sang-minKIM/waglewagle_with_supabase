import React from "react";
import { BrowserRouter, RouterProvider } from "react-router-dom";

import type { Preview } from "@storybook/react";

import { ProviderList } from "../src/providers";
import { router } from "../src/router";
import { theme } from "../src/style";

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
    <ProviderList>
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    </ProviderList>
  ),
];

export default preview;
