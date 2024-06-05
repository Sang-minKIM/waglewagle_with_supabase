import { PostTemplate } from "~/templates/post";

import { PostListContainer } from "~/containers/post-list";
import { StationNav } from "~/organisms/station-nav";
import { TagList } from "~/organisms/tag-list";

export const StationPage = () => {
  // Todo: station 실제 정보 삽입

  return (
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
};
