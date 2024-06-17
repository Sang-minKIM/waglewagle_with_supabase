const DB_CORRECTION_FACTOR = 1;

export const POST_LIST_ENDPOINT = {
  default: `/functions/v1/postList?stationId=30&pageSize=50&pageNumber=1`,
  sort: (body: { stationId: string; pageSize: number; pageNumber: number }) =>
    `/functions/v1/postList?stationId=${
      Number(body.stationId) + DB_CORRECTION_FACTOR
    }&pageSize=${body.pageSize}&pageNumber=${body.pageNumber}`,
};

export const POST_LIST_KEY = {
  default: ["post-list"],
  pagination: (
    body: { stationId: string; pageSize: number; pageNumber: number },
  ) => {
    return [
      ...POST_LIST_KEY.default,
      body.stationId,
      body.pageSize,
      body.pageNumber,
    ];
  },
};
