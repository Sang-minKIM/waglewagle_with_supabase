import styled from "@emotion/styled";

import { Post } from "./post";
import { PostListType } from "./post-list.types";

export const PostList = ({ posts }: PostListType) => {
  // TODO: createTime 형식 맞추기
  return (
    <Container>
      {posts.map(({ id, tagId, tag, createdTime, like, imageUrl, content }) => (
        <Post
          key={id}
          avatarId={tagId}
          name={tag.nickname}
          createdAt={createdTime}
          likeCount={like}
          imgSrc={imageUrl?.image_url}
          content={content}
        />
      ))}
    </Container>
  );
};

export const Container = styled.ul`
  scrollbar-width: none; /* 파이어폭스 */
  /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 19px;
`;
