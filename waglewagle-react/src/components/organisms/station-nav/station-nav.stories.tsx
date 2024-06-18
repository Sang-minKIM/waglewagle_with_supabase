import { StationNav } from "./station-nav";
import { StationNavProps } from "./station-nav.types";

export default {
  title: "organisms/StationNav",
  component: StationNav,
  tags: ["autodocs"],
};

export const Default = (args: StationNavProps) => <StationNav {...args} />;

Default.args = {
  leftStationIdx: 28,
  rightStationIdx: 29,
  currentStationIdx: 30,
};
