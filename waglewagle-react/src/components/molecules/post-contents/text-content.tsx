import styled from "@emotion/styled";

import { Text } from "~/atoms/text";

import { TextContentProps } from "./text-content.types";

export const TextContent = ({ children }: TextContentProps) => {
  return (
    <Container>
      <Text font="B18" color="gray50">
        {children}
      </Text>
    </Container>
  );
};
const Container = styled.article`
  padding: 0 15px;
  word-break: keep-all;
  text-align: center;
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.gray700};
  display: flex;
  justify-content: center;
  align-items: center;
`;
