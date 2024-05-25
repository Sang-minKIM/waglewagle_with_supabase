import styled from "@emotion/styled";

import { Avatar } from "~/atoms/avatar";
import { Text } from "~/atoms/text";

import { Flex } from "~/style/index";

interface ProfileProps {
  avatarId: string;
  name: string;
  createdAt: string;
}

export const Profile = ({ avatarId, name, createdAt }: ProfileProps) => {
  return (
    <Container>
      <Avatar avatarId={avatarId} />
      <Info>
        <Text font="SB14" color="gray300">
          {name}
        </Text>
        <Text font="R12" color="gray500">
          {createdAt}
        </Text>
      </Info>
    </Container>
  );
};

const Container = styled(Flex.Box)`
  width: max-content;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const Info = styled(Flex.Column.Box)`
  width: max-content;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
`;
