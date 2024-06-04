import styled from "@emotion/styled";

import { Icons } from "~/atoms/icons";
import { P } from "~/atoms/text";

import { EmptyListProps } from "./post.types";

export const EmptyList = ({ message }: EmptyListProps) => {
  return (
    <Container>
      <Icons.SpeechBubble />
      <P font="M16" color="gray700">
        {message}
      </P>
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 21px;
`;
