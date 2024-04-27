import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Contact from "../pages/contact/Contact";
import SignIn from "../pages/auth/SignIn/SignIn";
import SignUp from "../pages/auth/SignUp/SignUp";
import AddCraftItem from "../pages/addCraftItems/AddCraftItem";
import AllArtCraftItems from "../pages/allArt&CraftItem/AllArtCraftItems";
import MyCraftList from "../pages/myArt&CraftList/MyCraftList";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element:<Contact/>,
      },
      {
        path: "/addCraftItem",
        element:<AddCraftItem/>,
      },
      {
        path: "/allArt&CraftItems",
        element:<AllArtCraftItems/>,
      },
      {
        path: "/myArt&CraftList",
        element:<MyCraftList/>,
      },
      {
        path: "/signIn",
        element:<SignIn/>,
      },
      {
        path: "/signUp",
        element:<SignUp/>,
      },
    ],
  },
]);

export default router;
