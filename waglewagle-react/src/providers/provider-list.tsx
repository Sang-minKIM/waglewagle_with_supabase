import { ThemeProvider } from "@emotion/react";

import { GlobalStyleProvider } from "~/providers/global-style-provider";
import { QueryProvider } from "~/providers/query-client-provider";
import { StrictPropsWithChildren } from "~/shared";
import { theme } from "~/style";

export const ProviderList = ({ children }: StrictPropsWithChildren) => {
  return (
    <QueryProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyleProvider />
        {children}
      </ThemeProvider>
    </QueryProvider>
  );
};
