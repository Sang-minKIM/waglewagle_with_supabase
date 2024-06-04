import { StationNameBoard } from "./station-name-board";

export default {
  title: "molecules/StationNameBoard",
  component: StationNameBoard,
  tags: ["autodocs"],
};

export const Default = ({ name }: { name: string }) => <StationNameBoard name={name} />;
Default.args = {
  name: "서울대입구",
};
