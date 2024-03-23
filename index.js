document.addEventListener('DOMContentLoaded', (event) => {
    let backButton = document.querySelector('.js-back');
    let clearButton = document.querySelector('.js-clear');
    let output = document.querySelector('.js-output');
    backButton.addEventListener('click', function() {
        output.value = output.value.slice(0, -1);
    });
    clearButton.addEventListener('click', function() {
        output.value = '';
    });
    document.querySelectorAll('.js-number').forEach(function(button) {
        button.addEventListener('click', function() {
            output.value += this.innerText;
        });
    });
    document.querySelectorAll('.js-operation').forEach(function(button) {
        button.addEventListener('click', function() {
            if (this.innerText === '=') {
                let value = output.value.replace(/,/g, '.');
                if (value.includes('^')) {
                    let numbers = value.split('^').map(Number);
                    output.value = calculate(numbers[0], numbers[1], '^');
                } else if (value.includes('√')) {
                    let number = value.split('√')[1];
                    output.value = calculate(number, null, '√');
                } else {
                    output.value = eval(value);
                }
            } else {
                output.value += this.innerText;
            }
        });
    });    
});   