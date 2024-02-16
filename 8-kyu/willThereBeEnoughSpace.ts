export function enough(cap: number, on: number, wait: number): number {
    return (cap - on) >= wait ? 0 :  wait - (cap - on)
  }
  enough(10, 5, 5)
  enough(100, 60, 50)