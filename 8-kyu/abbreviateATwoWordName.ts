export function abbrevName(name: string): string {
    let seperatedNames = name.split(" ")
    return (seperatedNames[0].charAt(0) + "." + seperatedNames[1].charAt(0)).toLocaleUpperCase();
}
abbrevName("kevin teller")