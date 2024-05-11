import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      green500: string;
      green600: string;
      green700: string;
      green900: string;
      gray50: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray850: string;
      gray900: string;
    };
    typography: {
      B24: CSSProperties;
      B18: CSSProperties;
      B16: CSSProperties;
      SB18: CSSProperties;
      SB16: CSSProperties;
      SB14: CSSProperties;
      M16: CSSProperties;
      M14: CSSProperties;
      M12: CSSProperties;
      R16: CSSProperties;
      R14: CSSProperties;
      R12: CSSProperties;
    };
    scroll: {
      scrollbarWidth: string;
      webkitScrollbar: {
        display: string;
      };
    };
  }
}
