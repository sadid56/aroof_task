import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import Footer from "../Shared/Footer/Footer";


const Main = () => {
    return (
        <main>
            <Navber/>
            <Outlet/>
            <Footer/>
        </main>
    );
};

export default Main;