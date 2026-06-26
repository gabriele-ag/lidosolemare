import { Outlet } from "react-router";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

const GuestLayout = () => {
    return (
        <>
        <div className="page-container">
            <div className="content-wrap">
                <AppHeader/>
                <Outlet/>
            </div>
            <AppFooter/>
        </div>
        </>
    );
};

export default GuestLayout;