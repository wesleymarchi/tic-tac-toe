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
export default function Board() { // Componente Pai
    const [xIsNext, setXIsNext] = useState(true); // Define o x como sendo o primeiro movimento
    const [squares, setSquares] = useState(Array(9).fill(null)); // Cria uma matriz com 9 elementos (null)

    // Atualiza square; para lidar com eventos, nomes inciam com handleSomething
    function handleClick(i) {
        // Verifica se já existe um valor no button (X ou O)
        if (squares[i]) {
            return;
        }

        const nextSquares = squares.slice(); // Faz uma cópia de squares

        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }

        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    // className é uma propriedade (props)
    // value é uma props (propriedade)
    // () => arrow function
    return (
        <>
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