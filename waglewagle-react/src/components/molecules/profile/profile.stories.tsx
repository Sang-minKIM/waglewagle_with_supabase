import { Profile } from "./profile";

export default {
  title: "molecules/Profile",
  component: Profile,
  tags: ["autodocs"],
  argTypes: {
    avatarId: {
      control: {
        type: "number",
        labels: "avatarId",
        defaultValue: "0",
        description: "The avatar id for Icon.",
        min: 0,
        max: 11,
      },
    },
    name: {
      control: {
        type: "text",
        defaultValue: "이름",
        description: "The name for profile.",
      },
    },
    createdAt: {
      control: {
        type: "text",
        defaultValue: "12:30 작성됨",
        description: "The created at for profile.",
      },
    },
  },
};

export const Default = ({ avatarId, name, createdAt }: { avatarId: string; name: string; createdAt: string }) => (
  <Profile avatarId={avatarId} name={name} createdAt={createdAt} />
);
Default.args = {
  avatarId: "0",
  name: "이름",
  createdAt: "12:30 작성됨",
};
