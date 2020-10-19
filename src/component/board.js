import React from "react";
import Square from "./square";

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const squares = [];
    for (let i = 0; i < 3; i++) {
      const rowSquares = [];
      for (let j = 0; j < 3; j++) {
        rowSquares.push(this.renderSquare(i * 3 + j));
      }
      squares.push(
        <div key={i} className="board-row">
          {rowSquares}
        </div>
      );
    }
    return <div>{squares}</div>;
  }
}

export default Board;
