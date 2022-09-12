import react from "react";
import Foot from "./Footer/foot";
import Header from "./Header/Header";




const Layout = ({children})=>{
    return(
        <>
        <Header/><Foot/>
        <main>
            {children}
        </main>
        
        </>
    );
}
export default Layout;