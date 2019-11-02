function add(x, y) {
    return x + y;
}

function minus(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if(y != 0){
        return x / y;
    }else{
        return 'Can not divide with zero';
    }
}

const calculator = {add, minus, multiply, divide}
module.exports = calculator;