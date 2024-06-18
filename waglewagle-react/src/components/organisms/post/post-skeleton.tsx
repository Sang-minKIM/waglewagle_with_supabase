import styled from "@emotion/styled";

import { TextContent } from "~/molecules/post-contents";
import { Profile } from "~/molecules/profile";

import { Content, Footer, Header, Container as Item } from "./post";
import { Container as List } from "./post-list";

export const PostSkeleton = () => {
  return (
    <SkeletonList>
      <PostSkeletonItem />
      <PostSkeletonItem />
      <PostSkeletonItem />
    </SkeletonList>
  );
};

const PostSkeletonItem = () => {
  return (
    <SkeletonItem>
      <Header>
        <Profile avatarId={0} name={" "} createdAt={" "} />
      </Header>
      <Content>
        <TextContent>{""}</TextContent>
      </Content>
      <Footer />
    </SkeletonItem>
  );
};

const SkeletonList = styled(List)`
  /* overflow-y: hidden; */
`;

const SkeletonItem = styled(Item)`
  background-color: ${({ theme }) => theme.colors.gray800};
  @keyframes skeleton-gradient {
    0% {
      opacity: 0.8;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 0.8;
    }
  }

  animation: skeleton-gradient 1.5s infinite ease-in-out;
`;
