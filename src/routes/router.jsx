import { publicRoutes } from "./public.routes";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    ...publicRoutes
])