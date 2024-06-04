import { Avatar } from "./avatar";

export default {
  title: "atoms/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    avatarId: {
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

export const Default = ({ avatarId }: { avatarId: string }) => <Avatar avatarId={avatarId} />;
Default.args = {
  avatarId: "0",
};
