export enum Value {
  // numbers
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  EIGHT = 8,
  NINE = 9,
  // special cards
  QUEEN = 10,
  KING = 11,
  ACE = 12,
  WILD = 13,
  JACKS = 14,
}

export const values = [
  Value.ONE,
  Value.TWO,
  Value.THREE,
  Value.FOUR,
  Value.FIVE,
  Value.SIX,
  Value.SEVEN,
  Value.EIGHT,
  Value.NINE,
  Value.QUEEN,
  Value.KING,
  Value.ACE,
  Value.WILD,
  Value.JACKS,
];

/**
 * Returns true if `value` is {@link Value.WILD} or {@link Value.WILD_DRAW_FOUR}.
 */
export function isWild(value: Value) {
  return value === Value.WILD || value === Value.JACKS;
}

/**
 * Runtime type checking
 */
export function isValidValue(value: Value) {
  return values.indexOf(value) !== -1;
}
