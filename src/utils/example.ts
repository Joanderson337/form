export const calculateIdealWeight = (height: number, isMale: boolean): number => {
  // fórmula para cálculo do peso ideal
  const idealWeight = isMale ? (72.7 * height) - 58 : (62.1 * height) - 44.7;

  return idealWeight;
};
