const OPERATIONS = {
    sum: '+',
    substr: '-',
    mnoj: '*',
    delen: '/',
    sqrt: '√',
    pow: '^'
};
function parseEquation(equation) {
    let numbers = equation.split(/[\+\-\*\/]/).map(Number);
    let operators = equation.split(/\d+/).filter(Boolean);
    let result = numbers[0];

    for (let i = 0; i < operators.length; i++) {
        switch (operators[i]) {
            case '+':
                result += numbers[i + 1];
                break;
            case '-':
                result -= numbers[i + 1];
                break;
            case '*':
                result *= numbers[i + 1];
                break;
            case '/':
                result /= numbers[i + 1];
                break;
            default:
                break;
        }
    }

    return result;
}
function calculate(a, b, operation){
    let result = null;
    switch(operation)
    {
        case OPERATIONS.sum:
        result = sum(a, b);
        break;
        case OPERATIONS.substr:
        result = substr(a, b);
        break;
        case OPERATIONS.mnoj:
        result = mnoj(a, b);
        break;
        case OPERATIONS.delen:
        result = delen(a, b);
        break;
        case OPERATIONS.sqrt:
        result = sqrt(a);
        break;
        case OPERATIONS.pow:
        result = pow(a, b);
        break;
    default:
        break;
    } 
    return result;
}