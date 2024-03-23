const OPERATIONS = {
    sum: '+',
    substr: '-',
    mnoj: '*',
    delen: '/'
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
    
    default:
        break;
    } 
    return result;
}