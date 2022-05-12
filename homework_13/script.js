


//Все ли поля валидны, все ли поля заполнены
 /*   const fields = {};

    const inputs = document.querySelectorAll('input,texterea');
    const form = document.querySelector('form');

    inputs.forEach((input) => {
        const inputName = input.getAttribute('name');

        input.addEventListener('input', (event) =>{
    fields[inputName] = event.target.value;
        });
        
    });
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        console.log(fields);
        
        const result = Object.entries(fields).filter(([ key, value ]) => {
            console.log('key: ', key);
            console.log('value: ', value);
        });

      // console.log(Object.values(fields));
       console.log(result.length);

    });*/
   
 // Обязательность полей

 let form = document.querySelector('.form'),
    formInputs = document.querySelectorAll('.user__input')
    
    inputEmail = document.querySelector('.user__input-email'),
    
    inputCheckbox = document.querySelector('.user__input-checkbox');
    let nameControl = document.querySelector('.nameControl');
    let emailControl = document.querySelector('.emailControl');
    let checkboxControl = document.querySelector('.form__checkbox-wrapper');



function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function validateCountry(country) {
    let re = new RegExp('.co$');
    return re.test(String(country).toLowerCase());
}


form.onsubmit = function () {
    let emailVal = inputEmail.value;
    let emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
            nameControl.classList.add('error');
           emailControl.classList.add('error');
        } else {
            input.classList.remove('error');
            nameControl.classList.remove('error');
            emailControl.classList.remove('error');
        }
    });
    
    
    if (emptyInputs.length !== 0) {
        console.log('Поля не заполнены');
        return false;
    }
    if (!validateEmail(emailVal)) {
        console.log('Email-адрес не заполнен');
        inputEmail.classList.add('error');
        emailControl.classList.add('errorType2');
        return false;
    } else {
        inputEmail.classList.remove('error');
        notValidateEmail.classList.remove('errorType2');
    }

    if (validateCountry(emailVal)) {
        console.log('неверный Email');
        inputEmail.classList.add('error');
        return false;
    } else {
        inputEmail.classList.remove('error');
    }

    if (!inputCheckbox.checked) {
        console.log('Чекбокс не отмечен');
        inputCheckbox.classList.add('error');
        checkboxControl.classList.add('error');
        return false;
    } else {
        inputCheckbox.classList.remove('error');
        checkboxControl.classList.remove('error');
    }

}

