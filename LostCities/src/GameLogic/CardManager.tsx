import { ALL_COLORS, Card } from "../TypesConsts";

export function GenerateDeck() {
    let deck: Card[] = [];
    
    // expedition cards
    for (const color of ALL_COLORS) {
        for (let i = 2; i <= 10; i++) {
            deck.push({ color: color, value: i });
        }
    }

    // wager cards
    for (const color of ALL_COLORS) {
        for (let i = 0; i < 3; i++) {
            deck.push({ color: color, value: 1 });
        }
    }

    // shuffle deck
    deck.sort(() => Math.random() - 0.5);
    return deck;
}