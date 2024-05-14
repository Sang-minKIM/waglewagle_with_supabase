import { PropsWithChildren } from "react";

import { ThemeProvider } from "@emotion/react";

import { GlobalStyleProvider } from "~/providers/globalStyleProvider";
import { theme } from "~/style";

export const ProviderList = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyleProvider />
        {children}
      </ThemeProvider>
    </>
  );
};
