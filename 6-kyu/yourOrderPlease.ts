export function orderV2(words: string): string {
    let sorted: string[] = []
    let order: number = 1

    while (sorted.length !== words.split(" ").length) {
        words.split(" ").forEach((it) => {
            if (it.includes(order.toString())) {
                sorted.push(it)
                order++
            }
        })
    }
    return sorted.join(" ")
}

export function order(words: string): string {
    let sorted: string[] = []
    let order: number = 1
    let wordsArr = words.split(" ")

    for(let a = 0; a < wordsArr.length; a++) {
        for(let b = 0; b < wordsArr.length; b++) {
            if(wordsArr[b].includes(order.toString())) {
                sorted.push(wordsArr[b])
                order++
                break;
            }
        }
    }
    return sorted.join(" ")
}
order("is2 Thi1s T4est 3a")