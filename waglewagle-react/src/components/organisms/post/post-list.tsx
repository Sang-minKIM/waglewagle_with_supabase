import styled from "@emotion/styled";

import { Post } from "./post";
import { PostListDataProps } from "./post.types";

export const PostList = ({ postList }: { postList: PostListDataProps[] }) => {
  // TODO: createTime 형식 맞추기
  return (
    <Container>
      {postList.map(({ id, avatarId, tag, createdTime, like, imageUrl, content }) => (
        <Post
          key={id}
          avatarId={avatarId}
          name={tag.nickname}
          createdAt={createdTime}
          likeCount={like}
          imgSrc={imageUrl}
          content={content}
        />
      ))}
    </Container>
  );
};

const Container = styled.ul`
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
