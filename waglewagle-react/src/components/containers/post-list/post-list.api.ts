import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { fetchData } from "~/utils/api";
import { POST_LIST_ENDPOINT, POST_LIST_KEY } from "./post-list.key";
import { PostListType } from "./post-list.types";

export const usePostListQuery = (
  stationId: string,
  pageSize: number = 50,
  pageNumber: number = 1,
): UseSuspenseQueryResult<PostListType> =>
  useSuspenseQuery<PostListType>({
    queryKey: POST_LIST_KEY.sort({ stationId, pageSize, pageNumber }),
    queryFn: () =>
      fetchData(
        POST_LIST_ENDPOINT.sort({ stationId, pageSize, pageNumber }),
      ),
  });
