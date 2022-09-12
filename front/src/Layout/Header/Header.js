import react, { useState } from "react";
import Style from './Header.module.css';
import logo from '../../assets/img/logoNm.png';
import { Link } from "react-router-dom";



const Header = () => {
    const[show, setShow] = useState(false);

    const[active, setActive] = useState(0);

    function actived(number){
        setActive(number);
    }
 
    function click(){
        setShow(current=>!current);
    }
        
    return (
        <>
            <div className={Style.nav}>
                <img src={logo} height="125px" className={Style.logo} />
                <div className={Style.links}>
                    <Link to="/"  className={active===0 ?Style.actv : Style.actvo} onClick={()=>actived(0)}>Accueil</Link>
                    <Link to="/" className={active===1 ?Style.actv : Style.actvo} onClick={()=>actived(1)}>A propos</Link>
                    <Link to="inscription" className={active===2 ?Style.actv : Style.actvo} onClick={()=>actived(2)}>Inscription</Link>
                    <Link to="connexion"  className={active===3 ?Style.actv : Style.actvo} onClick={()=>actived(3)}>Connexion</Link>
                </div>
               { show === true && <div className={Style.link}>
                    <a >ACCUEIL</a><br/>
                    <a>A propos</a><br/>
                    <a>Inscription</a><br/>
                    <a>Connexion</a>
                </div>}
                <div className={Style.menu}>
                    <button className={Style.barmenu} onClick={click} id="btn" type="button" aria-label="Toggle navigation" aria-expanded="false">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                
            </div>

        </>
    );
}

export default Header;