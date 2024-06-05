import styled from "@emotion/styled";

import { LikeBtn, TransparentBtn } from "~/atoms/buttons";
import { Text } from "~/atoms/text";

import { ImgContent, TextContent } from "~/molecules/post-contents";
import { Profile } from "~/molecules/profile";

import { PostProps } from "./post.types";

export const Post = ({ avatarId = 0, name, createdAt, likeCount, imgSrc, content }: PostProps) => {
  return (
    <Container>
      <Header>
        <Profile avatarId={avatarId} name={name} createdAt={createdAt} />
        <TransparentBtn onClick={() => {}}>
          <Text font="M14" color="gray300">
            신고
          </Text>
        </TransparentBtn>
      </Header>
      <Content>
        {imgSrc ? <ImgContent imgSrc={imgSrc}>{content}</ImgContent> : <TextContent>{content}</TextContent>}
      </Content>
      <Footer>
        <LikeBtn />
        <Text font="M14" color="gray300">
          {likeCount}
        </Text>
      </Footer>
    </Container>
  );
};

const Container = styled.li`
  width: 100%;
  max-width: 480px;
  height: max-content;
  min-height: 465px;
  flex-shrink: 0;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.gray800};
`;

const Header = styled.header`
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  flex-shrink: 0;
  padding: 0 16px;
`;

const Content = styled.section`
  width: 100%;
  height: max-content;
`;

const Footer = styled.footer`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  padding-left: 16px;
`;
