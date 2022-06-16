import './IndexPage.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import ProductPage from '../ProductPage/ProductPage';
import { UsersPage } from '../UsersPage/UsersPage';




function IndexPage() {
        
    return (
       <div className={'wrapper'}>
        <ProductPage/>
        <UsersPage />
        </div>
    )
}

   
                    
        
    
export default IndexPage;