import { useState } from "react";
import Square from '../components/Square';
import CalculateWinner from "./CalculateWinner";

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [square, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
        if (square[i] || CalculateWinner(square)) {
            return;

        }

        const nextSquares = square.slice();

        if (xIsNext) {
            nextSquares[i] = "X";

        } else {
            nextSquares[i] = "O";

        }

        setSquares(nextSquares);
        setXIsNext(!xIsNext);
        console.log('you click the square ' + value);

    }

    const winner = CalculateWinner(square);
    let status;
    
    if (winner) {
        status = "Winner is: " + winner;

    } else {
        status = "Next player is: " + (xIsNext? "X" : "O");

    }

    return(
    <div className="bg-black 
                    w-full h-screen 
                    flex-col 
                    justify-center 
                    items-center
                    p-10 flex 
                    font-bold 
                    text-white">
        <div className="flex flex-row">
            <h1 className="text-white mb-10">
                {status}
            </h1>
        </div>
        <div className="flex flex-col items-center">
            <div className="flex flex-row">
                <Square value={square[0]} onClickSquare={() => handleClick(0)} />
                <Square value={square[1]} onClickSquare={() => handleClick(1)} />
                <Square value={square[2]} onClickSquare={() => handleClick(2)} />
            </div>

            <div className="flex flex-row">
                <Square value={square[3]} onClickSquare={() => handleClick(3)} />
                <Square value={square[4]} onClickSquare={() => handleClick(4)} />
                <Square value={square[5]} onClickSquare={() => handleClick(5)} />
            </div>

            <div className="flex flex-row">
                <Square value={square[6]} onClickSquare={() => handleClick(6)} />
                <Square value={square[7]} onClickSquare={() => handleClick(7)} />
                <Square value={square[8]} onClickSquare={() => handleClick(8)} />
            </div>
        </div>
    </div>
    );
}