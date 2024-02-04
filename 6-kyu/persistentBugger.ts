export function persistence(num: number): number {
    let count = 0;
    while (num.toString().length !== 1) {
        num = String(num).split('').map(d => +d).reduce((prev, current) => prev *= current);
        count++;
    }
    return count;
}

// -------> option 2 (simple)
// export function persistence(num: number): number {
//     let counter = 0;
//     while (num.toString().length > 1) {
//         let numberArray = (num.toString().split("")).map(Number);
//         for(var i: number = 0; i < numberArray.length; i++) {
//             if(i === 0) {
//                 num = numberArray[i]
//                 i++
//             }
//             num *= numberArray[i]
//         }
//         counter++;
//     };
//     return counter
// }
// persistence(535)