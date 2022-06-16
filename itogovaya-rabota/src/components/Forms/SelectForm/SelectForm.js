import './SelectForm.scss';
import { useState } from 'react';

function SelectForm() {
    const [value, setValue] = useState("Доставка по регионам");

    const handlerChange = (e) => {
        setValue(e.target.value);

        console.log(e.target.value);
    };


    return (
        <div className={'form__control'}>
            <label for="select" className={'form__label-service'}>Что еще может Вас заинтересовать?</label>
            <select value={value} onChange={handlerChange}>
                <option value="Доставка по регионам">Доставка по регионам</option>
                <option value="Скидки на продукцию ">Скидки на продукцию</option>
                <option value="Консультации по телефону">Консультации по телефону</option>
                <option value="Сопровождение покупки по телефону">Сопровождение покупки по телефону</option>
                <option value="Единовременный подарок от магазина">Единовременный подарок от магазина</option>
                                

            </select>
            </div>

    )
}

export default SelectForm;
