export function duplicateCount(text: string): number {
    return text
        .toLowerCase()
        .split('')
        .sort()
        .filter((it, pos, list) => {
            return list.indexOf(it) !== pos && list.lastIndexOf(it) === pos;
        }).length;
        // list.indexOf(it) !== pos && list.lastIndexOf(it) === pos
        //      0   !== 0  (F)  &&    1 === 0  (F) -> False
        //      1   !== 1  (T)  &&    1 === 1  (T) -> True
}
duplicateCount("ababccd")