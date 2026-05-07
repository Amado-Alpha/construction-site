import { publicRoutes } from "./public.routes";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/features/shared/pages/ErrorPage";
import UnderDevelopmentPage from "@/features/shared/pages/UnderDevelopmentPage";

export const router = createBrowserRouter([
    ...publicRoutes,
    {
        path: "*",
        element: <UnderDevelopmentPage />
    }
])