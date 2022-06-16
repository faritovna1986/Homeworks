import './Footer.scss';
import React from 'react';

import { Link }  from 'react-router-dom';
import { Logo } from '../Logo/Logo';


function Footer() {
    return (
        <footer className={'footer'}>
          <section className={'linksContainer'}>
                <div className={'linksContainerReferences'}>
                    <h3 className={'linksContainerReferencesCall'}>Категории товаров
                    </h3>
                        <Link to={'/'} className={'linksContainerReferencesReference'}>Чай</Link>
                        <Link to={'/'} className={'linksContainerReferencesReference'}>Чайные сервизы</Link>
                        <Link to={'/'} className={'linksContainerReferencesReference'}>Чайники</Link>
                        <Link to={'/'} className={'linksContainerReferencesReference'}>Наборы чаемана</Link>
                    </div>   

                    <div className={'linksContainerReferences'}>
                    <h3 className={'linksContainerReferencesCall'}>Разделы сайта
                    </h3>
                        <Link to={'/'} className={'linksContainerReferencesReference'}>Главная</Link>
                        <Link to={'/about'} className={'linksContainerReferencesReference'}>Контакты</Link>
                        <Link to={'/'} className={'linksContainerReferencesReference'}>Политика конфиденциальности</Link>
                        <Link to={'/'} className={'linksContainerReferencesReference'}>Договор оферты</Link>
                        <Link to={'/'} className={'linksContainerReferencesReference'}>О нас</Link>
                    </div>   
                  
                    <div className={'linksContainerReferences'}>
                    <h3 className={'linksContainerReferencesCall'}>Полезные ссылки
                    </h3>
                        <Link to={'/'} className={'linksContainerReferencesReference'}>Все о чае</Link>
                        <Link to={'/'} className={'linksContainerReferencesReference'}>Лечебные чаи</Link>
                        <Link to={'/'} className={'linksContainerReferencesReference'}>Фэн-шуй</Link>
                        <Link to={'/'} className={'linksContainerReferencesReference'}>Правила заваривания чая</Link>
                    </div>  
                    
                    <div className={'linksContainerAuthorship'}>
                    <Logo size={'big'}/>
                    <h4 className={'linksContainerAuthorshipCopyright'}>(с) Интернет-магазин 2022</h4>
                </div>  
            </section> 
        </footer>
    )
}

export default Footer;