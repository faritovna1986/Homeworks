import'./Layout.scss';
import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeaderMobile from '../components/HeaderMobile/HeaderMobile';
import { Outlet } from "react-router-dom";


function Layout() {
    return (
        <div>
            <Header/>
                <main className={'main'}>
                    <HeaderMobile/>
                    <Outlet/>
                </main>
            <Footer></Footer>

        </div>
    )
}
export default Layout;