import { StationNav } from "./station-nav";
import { StationNavProps } from "./station-nav.types";

export default {
  title: "molecules/StationNav",
  component: StationNav,
  tags: ["autodocs"],
};

export const Default = (args: StationNavProps) => <StationNav {...args} />;
Default.args = {
  leftStation: "봉천",
  currentStation: "서울대입구",
  rightStation: "낙성대",
};
