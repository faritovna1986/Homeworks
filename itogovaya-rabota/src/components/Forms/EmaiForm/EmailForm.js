import './EmailForm.scss';
import { useState } from 'react';

function EmailForm() {
    const [value, setValue] = useState('');

    return (
        <div>
           <input className={'input'} type="text" name='email' placeholder='E-mail адрес'required value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}

export default EmailForm;