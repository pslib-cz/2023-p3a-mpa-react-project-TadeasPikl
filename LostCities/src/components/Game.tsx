import Card from "./GameItems/Card";

export enum Color {
    Yellow = "yellow",
    Blue = "blue",
    Green = "green",
    White = "white",
    Red = "red"
};

const Game = () => {
    return (
        <div>
            <Card color={Color.Yellow} value={1} />
        </div>
    );
}

export default Game;