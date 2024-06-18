import { EmptyList, PostList } from "~/organisms/post";

import { usePostListQuery } from "./post-list.api";

export const PostListContainer = ({ stationId }: { stationId: string }) => {
  const { data } = usePostListQuery(stationId);

  return data.posts.length ? <PostList posts={data.posts} /> : <EmptyList message="나의 지하철 소식을 공유해보세요!" />;
};
