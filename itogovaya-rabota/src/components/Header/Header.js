import './Header.scss';
import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import { Logo } from '../Logo/Logo';



function Header() {
    return (
        <header className={'header'}>
           
            <Logo size={'small'}/>
            <h1 className={'headerShopname'}>Интернет-магазин Чая</h1>
            <Navigation />

        </header>
    )
}

export default Header;