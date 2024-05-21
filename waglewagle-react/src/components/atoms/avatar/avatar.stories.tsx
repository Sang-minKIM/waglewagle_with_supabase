import { Avatar } from "./avatar";

export default {
  title: "molecures/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    avatarId: {
      options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
      control: {
        type: "number",
        labels: "avatarId",
        defaultValue: "0",
        description: "The avatar id to display.",
        min: 0,
        max: 11,
      },
    },
  },
};

export const Default = () => <Avatar avatarId="0" />;
export const Avatar1 = {
  args: { avatarId: "1" },
  label: "Avatar 1",
};
export const Avatar2 = {
  args: { avatarId: "2" },
  label: "Avatar 2",
};
export const Avatar3 = {
  args: { avatarId: "3" },
  label: "Avatar 3",
};
export const Avatar4 = {
  args: { avatarId: "4" },
  label: "Avatar 4",
};
export const Avatar5 = {
  args: { avatarId: "5" },
  label: "Avatar 5",
};
export const Avatar6 = {
  args: { avatarId: "6" },
  label: "Avatar 6",
};
export const Avatar7 = {
  args: { avatarId: "7" },
  label: "Avatar 7",
};
export const Avatar8 = {
  args: { avatarId: "8" },
  label: "Avatar 8",
};
export const Avatar9 = {
  args: { avatarId: "9" },
  label: "Avatar 9",
};
export const Avatar10 = {
  args: { avatarId: "10" },
  label: "Avatar 10",
};
export const Avatar11 = {
  args: { avatarId: "11" },
  label: "Avatar 11",
};
