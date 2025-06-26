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
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Support from "../Pages/Support";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardOverview from "../Pages/DashboardOverview";
import DashboardAllItems from "../Pages/DashboardAllItems";
import DashboardAddItem from "../Pages/DashboardAddItem";
import DashboardMyItems from "../Pages/DashboardMyItems";

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
                path: "/about",
                Component: About,
            },
            {
                path: "/contact",
                Component: Contact,
            },
            {
                path: "/support",
                Component: Support,
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
                path: "/dashboard",
                element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
                children: [
                    {
                        index: true,
                        Component: DashboardOverview,
                    },
                    {
                        path: "all-items",
                        element: <PrivateRoute><DashboardAllItems /></PrivateRoute>,
                    },
                    {
                        path: "add-item",
                        element: <PrivateRoute><AddPlants /></PrivateRoute>,
                    },
                    {
                        path: "my-items",
                        element: <PrivateRoute><MyPlants /></PrivateRoute>,
                    },
                ],
            },
            {
                path: "*",
                element: <ErrorPage />,
            },
        ],
    },
]);
