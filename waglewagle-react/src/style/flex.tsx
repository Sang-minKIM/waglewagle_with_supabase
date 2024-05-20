import styled from "@emotion/styled";

export const FlexBox = styled.div`
  display: flex;
`;
export const FlexCenter = styled(FlexBox)`
  justify-content: center;
  align-items: center;
`;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`;

export const FlexColumnCenter = styled(FlexColumn)`
  justify-content: center;
  align-items: center;
`;
