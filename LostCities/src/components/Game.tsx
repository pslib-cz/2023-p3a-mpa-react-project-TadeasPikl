import CardVisual from "./gameItems/Card";

export enum Color {
    Yellow = "yellow",
    Blue = "blue",
    Green = "green",
    White = "white",
    Red = "red"
};

type Card = {
    color: Color;
    value: number;
};


const Game = () => {

    function GenerateDeck() {
        let deck: Card[] = [];
        
        // expedition cards
        for (const color of [Color.Yellow, Color.Blue, Color.Green, Color.White, Color.Red]) {
            for (let i = 2; i <= 10; i++) {
                deck.push({ color: color, value: i });
            }
        }

        // wager cards
        for (const color of [Color.Yellow, Color.Blue, Color.Green, Color.White, Color.Red]) {
            for (let i = 0; i < 3; i++) {
                deck.push({ color: color, value: 1 });
            }
        }
        // shuffle deck
        deck.sort(() => Math.random() - 0.5);
        return deck;
    }

    function GameStart() {
        let deck = GenerateDeck();
        let player1Hand: Card[] = [];
        let player2Hand: Card[] = [];
        let discardPiles: Card[][] = [[], [], [], [], []];

        for (let i = 0; i < 8; i++) {
            player1Hand.push(deck.pop()!);
            player2Hand.push(deck.pop()!);
        }


        console.log(player1Hand);
        console.log(player2Hand);
        console.log(discardPiles);
    }

    return (
        <div>
            <CardVisual color={Color.Yellow} value={1} />
            <CardVisual color={Color.Red} value={7} />
        </div>
    );
}

export default Game;