import { Tag } from "./tag";

export default {
  title: "molecules/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    tagId: {
      control: {
        type: "number",

        defaultValue: "0",
        description: "The tag id for icon.",
        min: 0,
        max: 11,
      },
    },
  },
};

export const Default = ({ tagId, children }: { tagId: string; children: string }) => (
  <Tag tagId={tagId}>{children}</Tag>
);
Default.args = {
  tagId: "0",
  children: "전체",
};
