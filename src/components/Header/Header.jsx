import logo from '/logo-header.svg';
import {  Link } from "react-router-dom";
import classes from './Header.module.css';


export default function Header() {
    return (
        <>
        <header>
            <div className={`${classes.header} ${classes.container}`}>
       
         <Link to="/"> <img src={logo} alt={'DiveSea'} /></Link>
        <nav className={`${classes.header__nav}`}>
            <Link to="/discover" className={`${classes.header__link}`}>discover</Link>
            <Link to="/creators" className={`${classes.header__link}`}>creators</Link>
            <Link to="/sell" className={`${classes.header__link}`}>sell</Link>
            <Link to="/start" className={`${classes.header__link}`}>start</Link>
        </ nav>
        <div className={`${classes.header__search}`} >

        </div>
        <button className={`${classes.button}`}>Connect Wallet</button>
        </div>
        </header>
        </>
    )
}