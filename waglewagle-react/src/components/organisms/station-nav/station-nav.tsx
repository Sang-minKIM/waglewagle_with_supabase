import styled from "@emotion/styled";

import { TransparentBtn } from "~/atoms/buttons";
import { Text } from "~/atoms/text";

import { StationNameBoard } from "~/molecules/station-name-board";

import { StationNavProps } from "./station-nav.types";

export const StationNav = ({ leftStation, rightStation, currentStation }: StationNavProps) => {
  return (
    <Nav>
      <TransparentBtn>
        <Text font="B16" color="gray500">
          {leftStation}
        </Text>
      </TransparentBtn>
      <StationNameBoard name={currentStation} />
      <TransparentBtn>
        <Text font="B16" color="gray500">
          {rightStation}
        </Text>
      </TransparentBtn>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  span:last-child,
  span:first-child {
    flex-basis: min-content;
    width: max-content;
    flex-grow: 1;
    max-width: 100px;
    height: max-content;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
