export default function CalculateWinner(square) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const element of lines) {
        const [a, b, c] = element;
        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
            return square[a];
            
        }
    }
}