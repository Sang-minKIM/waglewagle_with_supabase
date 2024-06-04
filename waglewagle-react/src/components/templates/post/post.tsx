import { FunctionComponent, ReactNode } from "react";

import styled from "@emotion/styled";

type ChildrenProps = { children?: ReactNode };

interface PostTemplateProps extends FunctionComponent<ChildrenProps> {
  Header: FunctionComponent<ChildrenProps>;
  Main: FunctionComponent<ChildrenProps>;
}

export const PostTemplate: PostTemplateProps = ({ children }) => {
  return <Container>{children}</Container>;
};

PostTemplate.Header = ({ children }: ChildrenProps) => <Header>{children}</Header>;
PostTemplate.Main = ({ children }: ChildrenProps) => <Main>{children}</Main>;

const Container = styled.div`
  min-width: 375px;
  max-width: 480px;
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const Header = styled.header`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Main = styled.main`
  width: 100%;
  height: calc(100% - 130px);
`;
