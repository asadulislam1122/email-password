import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Profile from "../Pages/Profile";
import Signin from "../Pages/Signin";
import SignUp from "../Pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "profile", Component: Profile },
      { path: "signin", Component: Signin },
      { path: "signup", Component: SignUp },
    ],
  },
]);
