import { Theme } from "@emotion/react";

// theme.js
export const theme: Theme = {
  colors: {
    green500: "#00dfa9",
    green600: "#00c19f",
    green700: "#128b76",
    green900: "#203a40",
    gray50: "#f0f3f9",
    gray100: "#e2e6ef",
    gray200: "#bcc1cd",
    gray300: "#9aa1b3",
    gray400: "#737c94",
    gray500: "#576381",
    gray600: "#464f67",
    gray700: "#343b4d",
    gray800: "#232834",
    gray850: "#171c25",
    gray900: "#11141a",
  },
  typography: {
    B24: {
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "34px",
    },
    B18: {
      fontSize: "18px",
      fontWeight: "700",
      lineHeight: "26px",
    },
    B16: {
      fontSize: "16px",
      fontWeight: "700",
      lineHeight: "24px",
    },
    SB18: {
      fontSize: "18px",
      fontWeight: "600",
      lineHeight: "26px",
    },
    SB16: {
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "24px",
    },
    SB14: {
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "22px",
    },
    M16: {
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "24px",
    },
    M14: {
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "22px",
    },
    M12: {
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: "20px",
    },
    R16: {
      fontFamily: "Pretendard",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "24px",
    },
    R14: {
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "22px",
    },
    R12: {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "18px",
    },
  },
  scroll: {
    scrollbarWidth: "none",
    webkitScrollbar: {
      display: "none",
    },
  },
};

export default theme;
