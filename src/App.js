/*
* COMPONENTE
*   É um fragmento de código reutilizável, representando uma parte de uma interface do usuário. São usados para
*   renderizar, gerenciar e atualizar os elementos.
* */

import {useState} from "react";

function Square() { // Componentes devem inciar com letras maiúsculas; value é uma propriedade
    const [value, setValue] = useState(null);

    // Event
    function handleClick() {
        setValue('X');
    }

    return (
        <button
            className="square"
            onClick={handleClick}
        >
            {value}
        </button>
    );
}

// Função chamada Board()
// export é uma palavra-chave (reservada) que torna a função acessível fora do arquivo
// default informa a outros arquivos usando seu código que é a função principal deste arquivo
// retorn irá retornar um elemento JSX (combinação de JS e HTML)
export default function Board() { // Componente Pai
  // className é uma propriedade (props)
  // value é uma props (propriedade)
  return (
      <>
          <div className="board-row">
              <Square />
              <Square />
              <Square />
          </div>
          <div className="board-row">
              <Square />
              <Square />
              <Square />
          </div>
          <div className="board-row">
              <Square />
              <Square />
              <Square />
          </div>
      </>
  );
}