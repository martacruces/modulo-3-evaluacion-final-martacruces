import React from 'react';
import Logo from '../images/Logo.png'

const Header = () =>{
    return <header className="header"><img className="header__logo shake-little shake-constant" src={Logo} alt="logo"/></header>
}

export default Header;