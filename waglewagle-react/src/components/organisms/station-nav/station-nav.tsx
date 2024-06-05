import { useNavigate } from "react-router-dom";

import styled from "@emotion/styled";

import { TransparentBtn } from "~/atoms/buttons";
import { Text } from "~/atoms/text";

import { StationNameBoard } from "~/molecules/station-name-board";
import { stationList } from "~/shared/station-list.model";

import { StationNavProps } from "./station-nav.types";

export const StationNav = ({ leftStationIdx, rightStationIdx, currentStationIdx }: StationNavProps) => {
  const navigate = useNavigate();
  return (
    <Nav>
      <TransparentBtn onClick={() => navigate(`/station/${leftStationIdx}`)}>
        <Text font="B16" color="gray500">
          {stationList[leftStationIdx]}
        </Text>
      </TransparentBtn>
      <StationNameBoard name={stationList[currentStationIdx]} />
      <TransparentBtn onClick={() => navigate(`/station/${rightStationIdx}`)}>
        <Text font="B16" color="gray500">
          {stationList[rightStationIdx]}
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
  button:last-child,
  button:first-child {
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
