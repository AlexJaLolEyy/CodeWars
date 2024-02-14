export const reverseSeq = (n: number): number[] => {
    let numbers: number[] = []
    for(let i = 1; i <= n; i++) {
        numbers.push(i)
    }
    return numbers.reverse();
  };
  reverseSeq(10)