import { PostListContainer } from "~/components/containers/post-list";
import { StationNav } from "~/organisms/station-nav";
import { TagList } from "~/organisms/tag-list";

import { PostTemplate } from "./post";

export default {
  title: "templates/Post",
  component: PostTemplate,
  tags: ["autodocs"],
};

export const Default = () => (
  <PostTemplate>
    <PostTemplate.Header>
      <StationNav leftStation="서울대입구" rightStation="사당" currentStation="낙성대" />
      <TagList />
    </PostTemplate.Header>
    <PostTemplate.Main>
      <PostListContainer />
    </PostTemplate.Main>
  </PostTemplate>
);
