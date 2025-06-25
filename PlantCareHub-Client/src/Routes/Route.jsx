import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Singup from "../auth/Singup";
import Singin from "../auth/Singin";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AllPlants from "../Pages/AllPlants";
import PlantDetails from "../Pages/PlantDetails";
import MyPlants from "../Pages/MyPlants";
import UpdatePlant from "../Pages/UpdatePlant";
import AddPlants from "../Plants/AddPlants";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                path: "/",
                Component: Home,
            },
            {
                path: "/plants",
                Component: AllPlants,
            },
            {
                path: "/add-plant",
                element: <PrivateRoute><AddPlants /></PrivateRoute>,
            },
            {
                path: "/my-plants",
                element: <PrivateRoute><MyPlants /></PrivateRoute>,
            },
            {
                path: "/plants/:id",
                element: <PrivateRoute><PlantDetails /></PrivateRoute>,
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><UpdatePlant /></PrivateRoute>,
            },
            {
                path: "/register",
                Component: Singup,
            },
            {
                path: "/login",
                Component: Singin,
            },
            {
                path: "*",
                element: <ErrorPage />,
            },
        ],
    },
]);
