export const zeroFuel = (distance: number, mpg: number, fuelLeft: number): boolean => {
    return distance <= mpg * fuelLeft
  };
  zeroFuel(100, 50, 1)