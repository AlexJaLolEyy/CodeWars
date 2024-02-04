export function descendingOrder(n: number): number {
    return Number((n.toString()).split("").sort().reverse().join(""))
  }
descendingOrder(1255489)