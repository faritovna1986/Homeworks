import './NameForm.scss';
import { useState } from 'react';

function NameForm() {
    const [value, setValue] = useState('');

    return (
        <div>
           <input className={'input'} type="text" name='username' placeholder='Имя' required value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}

export default NameForm;