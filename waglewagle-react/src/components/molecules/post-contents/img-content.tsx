import styled from "@emotion/styled";

import { P } from "~/atoms/text";

import { ImgContentProps } from "./img-content.types";

export const ImgContent = ({ imgSrc, children }: ImgContentProps) => {
  return (
    <Container>
      <Img src={imgSrc} />
      <P font="R14" color="gray100">
        {children}
      </P>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  img {
    object-fit: cover;
  }
  p {
    padding: 0 12px;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
`;
