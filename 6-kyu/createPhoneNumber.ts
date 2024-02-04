export function createPhoneNumber(numbers: number[]): string {
  const stringNumbers: string = numbers.join("")
    return ("(" + stringNumbers.slice(0,3) + ") " + stringNumbers.slice(3,6) + "-" + stringNumbers.slice(6,10))
  }
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])