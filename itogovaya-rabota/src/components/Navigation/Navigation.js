import './Navigation.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';


function Navigation() {
    return (
        <nav className={'headerMenu'}>
            
            <NavLink to={'/'} className={'headerMenuLink'}>Главная</NavLink>
            <NavLink to={'/about'} className={'headerMenuLink'}>Контакты</NavLink>
            
        </nav>
            )
}

export default Navigation;