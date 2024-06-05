import useFetch from "~/hooks/use-fetch";
import { PostList } from "~/organisms/post";

import { PostData } from "./post-list.types";

export const PostListContainer = ({ stationId }: { stationId: string }) => {
  const { data, isLoading, error } = useFetch<{ posts: PostData[] }>(
    `/functions/v1/postList?stationId=${Number(stationId) + DB_CORRECTION_FACTOR}&pageSize=50&pageNumber=1`,
    "GET"
  );
  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (data?.posts) return <PostList posts={data.posts} />;
};

const DB_CORRECTION_FACTOR = 1;
