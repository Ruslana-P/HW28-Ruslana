import {sum} from './index';
import {minus} from './index';
import {multiply} from './index';
import {divide} from './index';
import {isSmaller} from './index';
import {isBigger} from "./index";
import {sumSpread} from "./index";
import {getUserInfo} from "./index";
import {pow} from "./index";

describe('function sum', ()=> {
    test('should result be 10', () => {
        expect(sum(5,5)).toBe(10);
    });
    test(('should result not to be 10'), () => {
       expect(sum(2,5)).not.toBe(10);
    });
    test('should result be 2.2', () => {
        expect(sum(1.1, 2)).toBe(3.1);
    });
});

describe('function sumSpread', () => {
   test('should result to be 10 ', () => {
      expect(sumSpread(1,9)).toBe(10);
   });
   test('should result to be 0', () => {
      expect(sumSpread()).toBe(0);
   });
});

describe('function minus', () => {
    test('should result be 10', () => {
        expect(minus(10,0)).toBe(10);
        });
    test('should result not to be 5', () => {
        expect(minus(10,2)).not.toBe(5);
        });
    test('should result to be 8.2', ()=> {
        expect(minus(10.2, 2)).toBe(8.2);
    })
});

describe('function multiply', () => {
    test('should result be 15', () => {
       expect(multiply(5,3)).toBe(15);
    });
    test('should result not to be 29', () => {
       expect(multiply(2,6)).not.toBe(29);
    });
    test('should result to be 4,4', () => {
        expect(multiply(2.2,2)).toBe(4.4);
    });
});

describe('function divide', () => {
    test('should result to be 20', () => {
        expect(divide(100, 5)).toBe(20);
    });
    test('should result not to be 10', () => {
        expect(divide(10, 2)).not.toBe(10);
    });
    test('should result not be 2.1', () => {
        expect(divide(4.2, 2)).toBe(2.1);
    });
});

describe('function pow', () => {
   test('should result to be 10', () => {
       expect(pow(2,3)).toBe(8);
   });
   test('should result not to be 12', () => {
      expect(pow(2,4)).not.toBe('16');
   });
});

describe('function isBigger', () => {
    test('should result be true', () => {
        expect(isBigger(3,2)).toBe(true);
    });
    test('should result not to be true', () => {
        expect(isBigger(1,2)).not.toBe(true);
    })
});

describe('function isSmaller', () => {
    test('should result be true', () => {
       expect(isSmaller(1,2)).toBe(true);
    });
    test('should result not to be', () => {
       expect(isSmaller(3,2)).not.toBe(true);
    });
});

describe('function getUserInfo', () => {
    test('should return object ', () => {
        expect(getUserInfo().fullName).toEqual(expect.stringMatching('Vick'));
    });
});