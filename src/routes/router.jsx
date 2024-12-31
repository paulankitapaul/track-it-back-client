import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../components/Home";
import AddItems from "../pages/AddItems";
import LostFound from "../pages/LostFound";


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
                element: <LostFound></LostFound>,
                loader: () => fetch('http://localhost:5000/all-item')

            },
            {
                path: '/addItems',
                element: <AddItems></AddItems>

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