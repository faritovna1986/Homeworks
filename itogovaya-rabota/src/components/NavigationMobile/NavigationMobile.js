import './NavigationMobile.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';


function NavigationMobile() {
    return (
        <nav className={'headerMobileMenu'}>
            <NavLink to=" / " className={'headerMobileMenuLink'}>Главная</NavLink>
            <NavLink to=" / about" className={'headerMobileMenuLink'}>Контакты</NavLink>
               
        </nav>
    )
}

export default NavigationMobile;

