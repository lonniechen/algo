export function bubbleSort(numberArray: number[]) {
    const length = numberArray.length
    let temp: number;
    for (let i = 0; i < length; i++) {
        for (let j = length - 1; j > i; j--) {
            if (numberArray[j] < numberArray[i]) {
                temp = numberArray[j]
                numberArray[j] = numberArray[i]
                numberArray[i] = temp
            }
        }
    }
    return numberArray
}