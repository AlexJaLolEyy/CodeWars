export function countBits(n: number): number {
    return n.toString(2).split("").filter((it) => it === "1").length;
  }
  countBits(1234)