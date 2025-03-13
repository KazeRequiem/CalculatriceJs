const clearButton = document.getElementById('clear');
const buttons = document.querySelectorAll('.content button');
const display = document.getElementById('result');

let clear = true;

clearButton.addEventListener('click', () => {
    display.value = '';
    clear = true;
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.getAttribute('value') === '='){
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
                clear = true;
            }
        }else {
            if (clear) {
                display.value = button.getAttribute('value');
                clear = false;
            }
            else{
                display.value += button.getAttribute('value');
            }
        }
    });
});