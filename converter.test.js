
const converter = require('./converter');

describe("Converter", () => {
    test('(1). return $0.03 if currency is 1', () => {
        const currency = 1;
        const result = converter(currency);
        expect(result).toEqual("$0.03");
    });

    test('(2). return Error if currency is 0', () => {
        const currency = 0;
        const result = converter(currency);
        expect(result).toEqual("Error");
    });

    test('(3). return 0.04 if currency is 1.27814', () => {
        const currency = 1.27814;
        const result = converter(currency);
        expect(result).toEqual("$0.04");
    });

    test('(4). return 33.01 if currency is 1000.35278', () => {
        const currency = 1000.35278;
        const result = converter(currency);
        expect(result).toEqual("$33.01");
    });

    test('(5). return Error if currency is A', () => {
        const currency = 'A';
        const result = converter(currency);
        expect(result).toEqual("Error");
    });

    test('(6). return Error if currency is -3', () => {
        const currency = -3;
        const result = converter(currency);
        expect(result).toEqual("Error");
    });

    test('(7). return Error if currency is -2.254182555', () => {
        const currency = -2.254182555;
        const result = converter(currency);
        expect(result).toEqual("Error");
    });

    test('(8). return Error if currency is $4', () => {
        const currency = "$4";
        const result = converter(currency);
        expect(result).toEqual("Error");
    });

    test('(9). return $33000.00 if currency is 1000000', () => {
        const currency = 1000000;
        const result = converter(currency);
        expect(result).toEqual("$33000.00");
    });

    test('(10). return $1.00 if currency is 30.3', () => {
        const currency = 30.3;
        const result = converter(currency);
        expect(result).toEqual("$1.00");
    });
});