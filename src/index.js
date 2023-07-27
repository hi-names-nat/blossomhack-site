import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error/Error";
import SponsorPage from "./components/SponsorPage/SponsorPage";
import register from "./registerServiceWorker";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/sponsor-page",
    element: <SponsorPage />
  }
]);
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
registerServiceWorker();

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// );
// registerServiceWorker();
