const calculator = require('./calculator');

describe("Calculator", () => {
    test('add if x = 1 and y = 1 result is 2',() => {
        const x = 1;
        const y = 1;
        const result = calculator.add(x, y);
        expect(result).toBe(2);
    });
 
    test('minus if x = 1 and y = 1 result is 0',() => {
        const x = 1;
        const y = 1;
        const result = calculator.minus(x, y);
        expect(result).toBe(0);
    });

    test('multiply if x = 1 and y = 1 result is 1 ',() => {
        const x = 1;
        const y = 1;
        const result = calculator.multiply(x, y);
        expect(result).toBe(1);
    });

    test('divide if x = 1 and y = 1 result is 1',() => {
        const x = 1;
        const y = 1;
        const result = calculator.divide(x, y);
        expect(result).toBe(1);
    });

    test('divide if x = 1 and y = 0 result is Can not divide with zero',() => {
        const x = 1;
        const y = 0;
        const result = calculator.divide(x, y);
        expect(result).toBe('Can not divide with zero');
    });

});