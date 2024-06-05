import styled from "@emotion/styled";

interface TransparentBtnProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  onClick: () => void;
}

export const TransparentBtn = ({
  width = "max-content",
  height = "max-content",
  children,
  onClick,
}: TransparentBtnProps) => {
  return (
    <Btn width={width} height={height} onClick={onClick}>
      {children}
    </Btn>
  );
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
