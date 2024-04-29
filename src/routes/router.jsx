import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Contact from "../pages/contact/Contact";
import SignIn from "../pages/auth/SignIn/SignIn";
import SignUp from "../pages/auth/SignUp/SignUp";
import AddCraftItem from "../pages/addCraftItems/AddCraftItem";
import AllArtCraftItems from "../pages/allArt&CraftItem/AllArtCraftItems";
import MyCraftList from "../pages/myArt&CraftList/MyCraftList";
import PrivateRouter from "./PrivateRouter";
import CategoryCraft from "../pages/categoryCraft/CategoryCraft";
import CraftDetails from "../pages/CraftDetails/CraftDetails";
import UpdateCraft from "../pages/updateCraft/UpdateCraft";
import ErrorPage from "../pages/errorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/addCraftItem",
        element: (
          <PrivateRouter>
            <AddCraftItem />
          </PrivateRouter>
        ),
      },
      {
        path: "/allArt&CraftItems",
        element: <AllArtCraftItems />,
      },
      {
        path: "/myArt&CraftList",
        element: <MyCraftList />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/categoryCraft/:cateName",
        element: <CategoryCraft />,
      },
      {
        path: "/craftDetails/:id",
        element: (
          <PrivateRouter>
            <CraftDetails />
          </PrivateRouter>
        ),
      },
      {
        path: "/updateCraft/:id",
        element: (
          <PrivateRouter>
            <UpdateCraft/>
          </PrivateRouter>
        )
      },
    ],
  },
]);

export default router;
