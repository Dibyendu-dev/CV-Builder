import { Outlet } from "react-router-dom";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
const Layout = () =>{
    return (
       <>
        <Header />
        <Outlet />
        <Footer/>
       </>
    )
}

export default Layout;