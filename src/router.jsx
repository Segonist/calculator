import Root from "./Root.jsx";
import { createBrowserRouter, Navigate } from "react-router-dom";

const routes = createBrowserRouter([
    {
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Navigate to="/stopwatch" />,
            },
            {
                path: "/login",
                element: <Login />,
                action: loginAction,
            },
            {
                path: "/register",
                element: <Register />,
                action: registerAction,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/stopwatch",
                element: <App />,
            },
            {
                path: "/shifts",
                element: <Shifts />,
                loader: shiftsLoader,
            },
        ],
    },
]);

export default routes;
