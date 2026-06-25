import { Outlet } from "react-router";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

const GuestLayout = () => {
    return (
        <>
            <AppHeader/>
            <Outlet/>
            <AppFooter/>
        </>
    );
};

export default GuestLayout;