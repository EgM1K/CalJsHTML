const inputANode = document.querySelector('.js-input-a');
const inputBNode = document.querySelector('.js-input-b');
const selectOperationNode = document.querySelector('.js-select-operation');
const btnResultNode = document.querySelector('.js-btn-result');
const outputNode = document.querySelector('.js-output');
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
        document.querySelector('.js-output').value += this.innerText;
    });
});

document.querySelectorAll('.js-operation').forEach(function(button) {
    button.addEventListener('click', function() {
        document.querySelector('.js-output').value += ' ' + this.innerText + ' ';
    });
});

document.querySelector('.js-btn-result').addEventListener('click', function() {
    document.querySelector('.js-output').value = eval(document.querySelector('.js-output').value);
});

btnResultNode.addEventListener('click', function(){
const a = Number(inputANode.value);
const b = Number(inputBNode.value);
const operation = selectOperationNode.value;
const result = calculate(a, b, operation);
    outputNode.textContent = result;
});