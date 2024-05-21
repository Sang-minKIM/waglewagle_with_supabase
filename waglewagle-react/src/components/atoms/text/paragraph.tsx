import styled from "@emotion/styled";

export const P = ({ children }: { children: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.p<{ color?: string; font?: string }>`
  font-size: ${({ theme, font = "M14" }) => theme.typography[font as keyof typeof theme.typography].fontSize};
  font-weight: ${({ theme, font = "M14" }) => theme.typography[font as keyof typeof theme.typography].fontWeight};
  line-height: ${({ theme, font = "M14" }) => theme.typography[font as keyof typeof theme.typography].lineHeight};
  color: ${({ theme, color = "gray500" }) => theme.colors[color as keyof typeof theme.colors]};
`;
