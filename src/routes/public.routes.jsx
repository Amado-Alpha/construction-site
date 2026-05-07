import { HomePage } from "../features/home/pages/HomePage";
import { PublicLayout } from "../layouts/PublicLayout";

export const publicRoutes = [
    {
        element: <PublicLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            }
        ]
    }
]