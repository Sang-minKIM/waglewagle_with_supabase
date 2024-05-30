import styled from "@emotion/styled";

import { TextProps } from "./text.types";

export const Text = ({ children, font = "M14", color = "gray500" }: TextProps) => {
  return (
    <Wrapper font={font} color={color}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.span<{ color: string; font: string }>`
  font-size: ${({ theme, font }) => theme.typography[font as keyof typeof theme.typography].fontSize};
  font-weight: ${({ theme, font }) => theme.typography[font as keyof typeof theme.typography].fontWeight};
  line-height: ${({ theme, font }) => theme.typography[font as keyof typeof theme.typography].lineHeight};
  color: ${({ theme, color }) => theme.colors[color as keyof typeof theme.colors]};
`;
