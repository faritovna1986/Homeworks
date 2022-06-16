import './RadioForm.scss';
import { useState } from 'react';

function RadioForm() {
    const [checked, setChecked] = useState(null);

    const items = ["Мужчина", "Женщина"];

    return (
        
        <div className={'form__control'}>
                        
            {items.map((item) => {
                  return (
                    <label className={'form__sex'} key={item} >
                        <div className={'form__radio-wrapper'}>
                            <input className={'form__radio'} type="rado" required checked={checked === item} onChange={() => setChecked(item)}/>
                            {item}
                            <div className={'form__radio-marker'}></div> 
                            <div className={'form__radio-outline'}></div>
                        </div>
                    </label>
                  )
              
            }
            )}

        </div>
    )
}

            
                
export default RadioForm;
