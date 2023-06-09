import { shuffle } from 'shuffle';

import { Card, Color, colors, Value } from './card';

function createUnoDeck() {
  /*
    108 cards

    76x numbers (0-9, all colors)
    8x draw two (2x each color)
    8x reverse (2x each color)
    8x skip (2x each color)
    4x wild
    4x wild draw four
  */

  const deck: Card[] = [];

  const createCards = (qty: number, value: Value, color?: Color) => {
    const cards = [];

    for (let i = 0; i < qty; i++) cards.push(new Card(value, color));

    return cards;
  };

  // for each color...
  colors.forEach((color) => {
    // CREATE NUMBERS
    for (let n = Value.ONE; n <= Value.NINE; n++) {
      deck.push.apply(deck, createCards(2, n, color));
    }

    deck.push.apply(deck, createCards(2, Value.QUEEN, color));
    deck.push.apply(deck, createCards(2, Value.ACE, color));
    deck.push.apply(deck, createCards(2, Value.KING, color));
  });

  deck.push.apply(deck, createCards(4, Value.WILD));
  deck.push.apply(deck, createCards(4, Value.JACKS));

  return deck;
}

export class Deck {
  private originalDraw: Function;
  private shuffle = shuffle({ deck: createUnoDeck() });

  get cards() {
    return this.shuffle.cards;
  }

  get length() {
    return this.shuffle.length;
  }

  constructor() {}

  draw(num?: number) {
    num = num || 1;
    let cards: Card[] = [];

    // if the amount to draw is more than the cards we have...
    if (num >= this.length) {
      const length = this.length;

      // draw all we have...
      cards = cards.concat(this.shuffle.draw.call(this, length));

      // regenerate the draw pile
      this.shuffle.reset();
      this.shuffle.shuffle();

      // then draw the rest we need
      num = num - length;
      if (num === 0) return cards;
    }

    return cards.concat(this.shuffle.draw(num));
  }
}
