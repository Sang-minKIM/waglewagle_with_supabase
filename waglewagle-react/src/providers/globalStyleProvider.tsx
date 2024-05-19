import { Global } from "@emotion/react";

import { globalStyle } from "~/style";

export const GlobalStyleProvider = () => {
  return (
    <>
      <Global styles={globalStyle} />
    </>
  );
};
