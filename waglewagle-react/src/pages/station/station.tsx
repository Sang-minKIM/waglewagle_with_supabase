import { useParams } from "react-router-dom";

import { PostTemplate } from "~/templates/post";

import { PostListContainer } from "~/containers/post-list";
import { StationNav } from "~/organisms/station-nav";
import { TagList } from "~/organisms/tag-list";
import { stationList } from "~/shared";

export const StationPage = () => {
  // Todo: station 실제 정보 삽입
  const { stationId } = useParams();
  const currentStationIdx = Number(stationId);
  const leftStationIdx = (currentStationIdx - 1 + stationList.length) % stationList.length;
  const rightStationIdx = (currentStationIdx + 1) % stationList.length;

  return (
    <PostTemplate>
      <PostTemplate.Header>
        <StationNav
          leftStationIdx={leftStationIdx}
          rightStationIdx={rightStationIdx}
          currentStationIdx={currentStationIdx}
        />
        <TagList />
      </PostTemplate.Header>
      <PostTemplate.Main>
        <PostListContainer />
      </PostTemplate.Main>
    </PostTemplate>
  );
};
