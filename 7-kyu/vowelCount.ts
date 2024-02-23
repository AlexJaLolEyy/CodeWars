export const getCount(str: string): number {
    return str.split("").filter((it) => {
       return it === "a" || it ===  "e" || it ===  "i" || it ===  "o" || it === "u"
    }).length;
  }
  getCount("aeioujkladk") // 6