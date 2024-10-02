import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import FullPizza from "./components/FullPizza/FullPizza";

// import { Provider } from "react-redux";
// import store from "./Redux/store";

const rootElem = document.getElementById("root");

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "/pizza/:id",
          element: <FullPizza />,
        },
      ],
    },
  ]);
  root.render(<RouterProvider router={router} />);
}
