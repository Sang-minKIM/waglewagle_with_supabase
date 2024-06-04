import styled from "@emotion/styled";

import { Icons } from "~/atoms/icons";
import { Text } from "~/atoms/text";

import { Flex } from "~/style/index";

export const Tag = ({ tagId: id, children }: { tagId: string; children: string }) => {
  const iconKey = "Tag" + id;
  const Icon = Icons[iconKey as keyof typeof Icons];
  return (
    <Wrapper>
      <Icon width="18px" />
      <Text font="M14" color="gray100">
        {children}
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled(Flex.Center)`
  width: max-content;
  height: 36px;
  padding: 0 10px;
  flex-shrink: 0;
  gap: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray800};
`;
