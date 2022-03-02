const stringLength   = require('./task1');
const reverseString  = require('./task2');
const calculatorApp  = require('./task3');
const capitalizeString = require('./task4');

describe('Task 1', () => {
    test('string length', () => {
        expect(stringLength.stringLength("Abenezer Tilahun")).toBe(16);
    });

    test('string length expanded must be between 1 and 10', () => {
        expect(stringLength.stringLengthExpand("Abeni")).toBe(5);
    });
});

describe('Task 2', () => {
    test('reverse string', () => {
        expect(reverseString.reverseString("Rahel Tilahun")).toMatch("uhaliT lehaR");
    });
});

describe('Task 3', () => {
    const app = new calculatorApp();
    describe('add', () => {
        test('2 + 3', () => {
            expect(app.add(2 , 3)).toBe(5);
        });
       
        test('20 + 20', () => {
            expect(app.add(20 , 20)).toBe(40);
        });

        test('8 + 4', () => {
            expect(app.add(8 , 4)).toBe(12);
        });
    });

    describe('minus', () => {
        test('2 - 3', () => {
            expect(app.minus(2 , 3)).toBe(-1);
        });
       
        test('20 - 20', () => {
            expect(app.minus(20 , 20)).toBe(0);
        });

        test('8 - 4', () => {
            expect(app.minus(8 , 4)).toBe(4);
        });
    });

    describe('divide', () => {
        test('3 / 3', () => {
            expect(app.divide(3 , 3)).toBe(1);
        });
       
        test('40 / 20', () => {  
            expect(app.divide(40 , 20)).toBe(2);
        });

        test('8 / 2', () => {
            expect(app.divide(8 , 2)).toBe(4);
        });
    });

    describe('multiply', () => {
        test('4 * 3', () => {          
            expect(app.multiply(4 , 3)).toBe(12);
        });
       
        test('4 * 5', () => {
            expect(app.multiply(4 , 5)).toBe(20);
        });

        test('6 * 5', () => {
            expect(app.multiply(6 , 5)).toBe(30);
        });
    });
});

describe('Task 4', () => {
    test('Capitalize First Character of string', () => {
        expect(capitalizeString.capitalizeString("abeni")).toMatch("Abeni");
    });
});