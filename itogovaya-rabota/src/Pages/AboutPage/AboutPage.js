import './AboutPage.scss';
import React from 'react';
import NameForm from '../../components/Forms/NameForm/NameForm';
import EmailForm from '../../components/Forms/EmaiForm/EmailForm';
import RadioForm from '../../components/Forms/RadioForm/RadioForm';
import TextareaForm from '../../components/Forms/TextareaForm/TextareaForm';
import SelectForm from '../../components/Forms/SelectForm/SelectForm';
import CheckBoxForm from '../../components/Forms/CheckBoxForm/CheckBoxForm';
import Button from '../../components/Button/Button';



function AboutPage() {
  
    return (    
            
        <form className={'contacts__form'}>
        <h2 className={'contacts__title'}>Обратная связь</h2>
          
             
                  <NameForm />
                  <EmailForm />
                  <RadioForm />
                  <TextareaForm />
                  <SelectForm />
                  <CheckBoxForm />
                <Button />                          
      </form>
       
           
    )
}
        
        
export default AboutPage;