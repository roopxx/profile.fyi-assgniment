import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import App from "../App";
import About from "./About";
import Contact from "./Contact";
import Store from "./Store";
import Cart from "./Cart";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    { path: "/store", element: <Store /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/cart", element: <Cart /> },
  ]);

  return <RouterProvider router={router} />;
}
