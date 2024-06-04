import styled from "@emotion/styled";

import { Icons } from "~/atoms/icons";

export const LikeBtn = () => {
  return (
    <Btn>
      <Icons.Heart />
    </Btn>
  );
};

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  margin: 0;
  width: max-content;
  height: max-content;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;
