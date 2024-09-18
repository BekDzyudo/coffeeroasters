// react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import CreatePlan from "./pages/createPlan/CreatePlan";
import ErrorPage from "./pages/errorPage/ErrorPage";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/create-plan",
          element: <CreatePlan />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
