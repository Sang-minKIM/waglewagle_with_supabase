export * from "./globalStyle";
export * from "./theme";
import { FlexBox, FlexCenter, FlexColumn, FlexColumnCenter } from "./flex";

export const Flex = {
  Box: FlexBox,
  Center: FlexCenter,
  Column: {
    Box: FlexColumn,
    Center: FlexColumnCenter,
  },
};
