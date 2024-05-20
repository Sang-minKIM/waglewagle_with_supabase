import styled from "@emotion/styled";

import { Icons } from "~/atoms/icons";

import { Flex } from "~/style";

export const Avatar = ({ avatarId: id }: { avatarId: string }) => {
  const iconKey = "Tag" + id;
  const IconComponent = Icons[iconKey as keyof typeof Icons];
  return (
    <Background>
      <IconComponent width="75%" />
    </Background>
  );
};

const Background = styled(Flex.Center)`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray600};
  border: 2px solid ${({ theme }) => theme.colors.gray400};
`;
