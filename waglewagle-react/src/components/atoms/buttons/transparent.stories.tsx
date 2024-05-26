import { Text } from "../text";
import { TransparentBtn } from "./transparent";

export default {
  title: "atoms/Button/TransparentBtn",
  component: TransparentBtn,
  tags: ["autodocs"],
};

export const ReportBtn = () => (
  <TransparentBtn>
    <Text font="M14" color="gray300">
      신고
    </Text>
  </TransparentBtn>
);
export const StationBtn = () => {
  return (
    <TransparentBtn>
      <Text font="B16" color="gray300">
        동대문역사공원
      </Text>
    </TransparentBtn>
  );
};
