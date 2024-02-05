import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
    useEffect(() => {
    }, []);
    return (
        <>
            <section className="section-center">
                <Outlet />
            </section>
        </>
    );
};

export default HomeLayout;