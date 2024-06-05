import styled from "@emotion/styled";

import { Tag } from "~/molecules/tag";

import { TagListModel } from "./tag-list.model";

export const TagList = () => {
  return (
    <Container>
      {TagListModel.map(({ tagId, tagName }) => (
        <Tag key={tagId} tagId={tagId}>
          {tagName}
        </Tag>
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
  height: 36px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  overflow-x: scroll;
`;
