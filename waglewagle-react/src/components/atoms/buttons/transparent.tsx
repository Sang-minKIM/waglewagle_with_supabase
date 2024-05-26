import styled from "@emotion/styled";

interface TransparentBtnProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
}

export const TransparentBtn = ({ width = "max-content", height = "max-content", children }: TransparentBtnProps) => {
  return <Btn width={width} height={height}>{children}</Btn>;
};

const Btn = styled.button<{ width: string; height: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  margin: 0;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  transition: 0.3s;
`;
