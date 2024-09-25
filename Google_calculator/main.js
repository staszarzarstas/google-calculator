    const buttons = document.querySelectorAll('.btn');
    const inputField = document.getElementById('inputField');
    

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const error = 'Ошибка'
            const buttonText = this.textContent;  // получение текста с кнопкт
            if(buttonText === 'AC') {
                inputField.value = '0'; // clear tesxt

            } else if (buttonText === '=') {
                 
                inputField.value = eval(inputField.value);

            }  else if (buttonText === 'xy') {
                    inputField.value *= inputField.value

            }  else if (buttonText === '√') {
                    inputField.value = Math.sqrt(inputField.value)
            
        }      else {

                  if (inputField.value === '0') {
                    inputField.value = buttonText; 
                }  else {
                    inputField.value += buttonText; 
                }
            }
        }); 
    });


