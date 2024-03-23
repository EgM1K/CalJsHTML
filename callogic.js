const OPERATIONS = {
    sum: '+',
    substr: '-',
    mnoj: '*',
    delen: '/',
    sqrt: '√',
    pow: '^'
};
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