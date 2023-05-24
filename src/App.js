/*
* COMPONENTE
*   É um fragmento de código reutilizável, representando uma parte de uma interface do usuário. São usados para
*   renderizar, gerenciar e atualizar os elementos.
* */

import {useState} from "react";

// Componentes personalizados, props iniciam com onSomething
function Square({value, onSquareClick}) { // Componentes devem inciar com letras maiúsculas; value é uma propriedade
    return (
        <button className="square" onClick={onSquareClick}>{value}</button>
    );
}

// Função chamada Board()
// export é uma palavra-chave (reservada) que torna a função acessível fora do arquivo
// default informa a outros arquivos usando seu código que é a função principal deste arquivo
// retorn irá retornar um elemento JSX (combinação de JS e HTML)
function Board({xIsNext, squares, onPlay}) {
    // Atualiza square; para lidar com eventos, nomes inciam com handleSomething
    function handleClick(i) {
        // Verifica se já existe um valor no button (X ou O)
        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        const nextSquares = squares.slice(); // Faz uma cópia de squares

        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }

        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;

    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    // className é uma propriedade (props)
    // value é uma props (propriedade)
    // () => arrow function
    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
  );
}

export default function Game() { // Componenete de nível superior - export default
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    // Exibindo os movimentos anteriores
    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;

        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

// Função auxiliar para definir o vencedor
function calculateWinner(squares) {
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

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}