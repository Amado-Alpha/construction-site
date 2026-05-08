import { publicRoutes } from "./public.routes";
import { createBrowserRouter } from "react-router-dom";
import UnderDevelopmentPage from "@/features/shared/pages/UnderDevelopmentPage";

export const router = createBrowserRouter([
    ...publicRoutes,
    {
        path: "*",
        element: <UnderDevelopmentPage />
    }
])