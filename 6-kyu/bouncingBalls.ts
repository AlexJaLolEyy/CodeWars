export function bouncingBall(h: number, bounce: number, window: number): number {
    let count = 0
    if(h > 0  && (bounce > 0 && bounce < 1) && window < h) {
        while(h > window) {
            count++; // ball falls
            h = h*bounce;
            if(h > window) {
                count++; // ball jupms
            }
        }
        return count
    }
    else {
        return -1
    }
  }
  bouncingBall(3.0, 0.66, 1.5)