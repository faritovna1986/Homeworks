import './TaxtareaForm.scss';
import { useState } from 'react';

function TaxtareaForm() {
    const [value, setValue] = useState('');

    return (
        <div>
           <textarea className={'textarea'} required value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}

export default TaxtareaForm;