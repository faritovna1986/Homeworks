import './StateComponent.scss';
import { useState } from 'react';
import classNames from 'classnames';

export function StateComponent(someProp = {}) {
    const [ isClicked, setIsClicked ] = useState(false);

    
    function onButtonClick() {
        setIsClicked(!isClicked);
    }

    

    return (
        <div>
            <div className={classNames('box', { box_clicked: isClicked })}>Текст</div>
            
            <button onclick={onButtonClick}>Увеличить</button>
        </div>
    )
}