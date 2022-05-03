
import { bubbleSort } from './bubble.sort'


describe('bubble sort', () => {

    let numberArray, result: number[];

    it('empty array', async () => {
        numberArray = []
        result = bubbleSort(numberArray)
        expect(result).toMatchObject([])
    });

    it('array with only one element', async () => {
        numberArray = [1]
        result = bubbleSort(numberArray)
        expect(result).toMatchObject([1])
    });

    it('array with only two elements', async () => {
        numberArray = [1, 2]
        result = bubbleSort(numberArray)
        expect(result).toMatchObject([1, 2])
        numberArray = [2, 1]
        result = bubbleSort(numberArray)
        expect(result).toMatchObject([1, 2])
    });

    it('array with many elements', async () => {
        numberArray = [1, 10, 4, 5, 9, 2, 3, 7, 4, 2, 7, 6, 0]
        result = bubbleSort(numberArray)
        expect(result).toMatchObject([0, 1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 9, 10])
    });
})