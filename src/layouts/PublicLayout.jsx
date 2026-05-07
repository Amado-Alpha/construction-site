import { Outlet } from "react-router-dom";
import Navbar from "../features/shared/components/Navbar";
import Footer from "../features/shared/components/Footer";

export function PublicLayout() {
    return (
        <div>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}