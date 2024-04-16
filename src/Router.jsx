import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function RouteComponent() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default RouteComponent;
