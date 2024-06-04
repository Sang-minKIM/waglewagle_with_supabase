import React from "react";

import type { Preview } from "@storybook/react";

import { ProviderList } from "../src/providers";
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
    <>
      <ProviderList>
        <Story />
      </ProviderList>
    </>
  ),
];

export default preview;
