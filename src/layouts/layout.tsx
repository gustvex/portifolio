import Footer from "@/components/footer";
import Header from "@/components/header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="min-h-screen w-full overflow-x-hidden">
            <Header />

            <main className="flex-1 p-4 max-w-full overflow-x-hidden">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
