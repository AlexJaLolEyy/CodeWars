export function arrayDiff(a: number[], b: number[]): number[] {
    return a.filter(it => !b.includes(it));
}
arrayDiff([1, 2, 3], [1, 2])
