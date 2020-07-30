import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
// import ButtonLink from './Components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="GuilhermeFlix Logo" />
            </a>
            
        <Button as="a" href="/" className="ButtonLink">
           Novo vídeo 
        </Button>
       </nav>
    )
}

export default Menu