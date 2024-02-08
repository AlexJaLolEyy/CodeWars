export function doubleChar(str: string): string{
    var newString = ""
    str.split("").forEach((it) => {
        newString += it + it
    })
    return newString
  }
doubleChar("test")