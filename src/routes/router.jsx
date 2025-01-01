import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../components/Home";
import AddItems from "../pages/AddItems";
import LostFound from "../pages/LostFound";
import Details from "../pages/Details";
import PrivateRoute from "./PrivateRoute";
import ManageMyItems from "../pages/ManageMyItems";
import RecoveredItems from "../pages/RecoveredItems";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/lost-and-found',
                element: <LostFound></LostFound>

            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/all-item/${params.id}`)

            },
            {
                path: '/addItems',
                element: <PrivateRoute><AddItems></AddItems></PrivateRoute>

            },
            {
                path: '/recoveredItems',
                element: <PrivateRoute><RecoveredItems></RecoveredItems></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/recovered-item')

            },
            {
                path: '/manageItems',
                element: <PrivateRoute><ManageMyItems></ManageMyItems></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/all-item')

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
]);

export default router