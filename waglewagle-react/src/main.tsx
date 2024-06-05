import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { ProviderList } from "~/providers";

import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProviderList>
      <RouterProvider router={router} />
    </ProviderList>
  </React.StrictMode>
);
