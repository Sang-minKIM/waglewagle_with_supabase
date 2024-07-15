import { createBrowserRouter } from "react-router-dom";

import { StationPage } from "~/pages/station";

import { ROUTE } from "./route.model";

export const router = createBrowserRouter([
  {
    path: ROUTE.root,
    element: <div>home</div>,
  },
  {
    path: ROUTE.station(":stationId"),
    element: <StationPage />,
  },
]);
