import Header from "../assets/components/Header";
import Footer from "../assets/components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
            <div className='text-lg'>
                <Header />
                <div id="detail">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Root;