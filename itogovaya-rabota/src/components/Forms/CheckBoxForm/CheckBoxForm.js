import './CheckBoxForm.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function CheckBoxForm() {
    const [checked, setChecked] = useState(false);


    return (
        <div className={'form__control'}>
            <div className={'form__checkbox-wrapper'}>
                <label>
                    <input className={'form__checkbox'} type="checkbox" required checked={checked} onChange={() => setChecked(!checked)}/>
                    <div className={'form__checkbox-marker'}></div> 
                    <div className={'form__checkbox-outline'}></div>
                    <span className={'form__label form__label-checkbox'}>Принимаю условия</span>
                    <Link className={'users_agreement'} to={'#'}>Пользовательского Соглашения</Link>
                </label>
            </div>
        </div>

           
    )
}

export default CheckBoxForm;
