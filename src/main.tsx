import ReactDOM from 'react-dom/client'
import './index.css'
import LocationContextProvider from "./contexts/LocationContextProvider.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage.tsx";
import TestPage from "./pages/test/TestPage.tsx";
import HomePage from "./pages/home/HomePage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: "/test",
        element: <TestPage />,
        errorElement: <ErrorPage />,
    }

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <LocationContextProvider>
        <RouterProvider router={router} />
    </LocationContextProvider>
)
