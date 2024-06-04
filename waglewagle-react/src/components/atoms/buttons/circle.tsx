import styled from "@emotion/styled";

import { Icons } from "../icons";

export const CircleBtn = () => {
  return (
    <Btn>
      <Icons.Pen />
    </Btn>
  );
};

const Btn = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.colors.green500};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 26px;
  right: 12px;
`;
