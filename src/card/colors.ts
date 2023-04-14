/**
 * Enum holding available card colors.
 *
 * RED, BLUE, GREEN and YELLOW,
 * represented with indexes
 * 1, 2, 3, 4 respectively.
 */
export enum Color {
  HEART = 1,
  SPADE = 2,
  DIAMOND = 3,
  CLUB = 4,
}

export const colors = [Color.HEART, Color.SPADE, Color.DIAMOND, Color.CLUB];


/**
 * Runtime type checking
 */
export function isValidColor(color: Color) {
  return colors.indexOf(color) !== -1;
}
