


//Все ли поля валидны, все ли поля заполнены
    const fields = {};

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

       /* console.log(Object.values(fields));*/
        console.log(result.length);

   // });
   
 
       
       inputs.addEventListener('input', (event)=> {

        if (inputs.value === ' ') {
            inputs.classList.add('.error');
            console.log('Поле не заполнено');
        } else {
            inputs.classList.remove('.error');
        }

    })
  return false;
    });


/*
function drawerror(error = []) {
    let resultHtml = '';

    inputs.Error.forEach((inputs) => {
        resultHtml += `
           <div class="error">Не заполнено</div>`;
                        

    });

    console.log(resultHtml);
    
    form.innerHTML = resultHtml;
 }*/