import { Post } from "./post";
import { PostProps } from "./post.types";

export default {
  title: "molecules/Post",
  component: Post,
  tags: ["autodocs"],
};

export const Default = (args: PostProps) => <Post {...args} />;
Default.args = {
  avatarId: "1",
  name: "김상민",
  createdAt: "12:11",
  likeCount: 10,
  content: "이미지 없는 포스트",
};
export const ImgPost = (args: PostProps) => <Post {...args} />;
ImgPost.args = {
  avatarId: "1",
  name: "김상민",
  createdAt: "12:11",
  likeCount: 10,
  imgSrc: "https://source.unsplash.com/random",
  content: "이미지 있는 포스트",
};
