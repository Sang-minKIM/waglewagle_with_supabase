import styled from "@emotion/styled";

import { Text } from "~/atoms/text";

import { Flex } from "~/style/index";

export const StationNameBoard = ({ name }: { name: string }) => {
  return (
    <Board>
      <Dot />
      <Text font="B18" color="gray50">
        {name}
      </Text>
    </Board>
  );
};

const Board = styled(Flex.Center)`
  max-width: 170px;
  width: max-content;
  height: 40px;
  padding: 0 14px;
  gap: 10px;
  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.colors.green500};
  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.green500};
`;
