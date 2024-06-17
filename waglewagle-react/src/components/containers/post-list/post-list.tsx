import { PostList } from "~/organisms/post";

import { usePostListQuery } from "./post-list.api";

export const PostListContainer = ({ stationId }: { stationId: string }) => {
  const { data } = usePostListQuery(stationId);

  return <PostList posts={data.posts} />;
};
