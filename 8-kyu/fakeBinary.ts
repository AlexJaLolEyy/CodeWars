export const fakeBin = (x: string): string => {
    return (x.split("").map((it) => +it < 5 ? "0" : "1")).join("")
}
fakeBin("7905891") // 1101110