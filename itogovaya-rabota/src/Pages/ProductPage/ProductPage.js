import './ProductPage.scss';
import React from 'react';



function ProductPage() {
    const products = [
        {
        image: './img/products/chaynica.jpg',
        title: 'Чайница',
        price: '2900 руб.',
        id: 1
        },

        {
        image: './img/products/chaynik.jpg',
        title: 'Чайник',
        price: '2990 руб.',
        id:2

        },

       
         {
        image: './img/products/bocal.jpg',
        title: 'Чайный бокал',
        price: '390 руб.',
        id: 3
        },

        {
        image: './img/products/chahe.jpg',
        title: 'Чахе коробочка',
        price: '550 руб.',
        id: 4
        },
    
        {
        image: './img/products/krujka.jpg',
        title: 'Кружка',
        price: '1750 руб.',
        id: 5
        },
    
        {
        image: './img/products/piala.jpg',
        title: 'Пиала "Кувшинка"',
        price: '390 руб.',
        id: 6
        },
        {
        image: './img/products/pohodnabor.jpg',
        title: 'Походный набор',
        price: '7500 руб.',
        id: 7
        }
    ];
    
        return (      
            <div className={'container'}>
                    
        {
            products.map((product) => {
                return (
                    
                        <div className={'container__products'} >
                            <div className={'container__products-card'} key={product.id}>
                                <img className={'container__products-card__img'} src={product.image}></img>
                                <div className={'container__products-card__title'}>{product.title}</div>
                                <div className={'container__products-card__price'}>{product.price}</div>
                            </div> 
                        </div>
                   
                                )
                                    
            })
                              
        }
                   
                
            </div>
       
           
    )
  
       
      
}    

   
                    
        
    
export default ProductPage;