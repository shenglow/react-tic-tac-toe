import React from "react";
import Board from "./board";
import calculateWinner from "../js/helper/calculate-winner";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
<<<<<<< HEAD
=======
      isAscending: true,
>>>>>>> feature/extraPratice
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) return;
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
<<<<<<< HEAD
      history: history.concat([{ squares: squares }]),
=======
      history: history.concat([{ squares: squares, lastMoveLocation: i }]),
>>>>>>> feature/extraPratice
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

<<<<<<< HEAD
=======
  handleSortToggle() {
    this.setState({
      isAscending: !this.state.isAscending,
    });
  }

>>>>>>> feature/extraPratice
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    const stepNumber = this.state.stepNumber;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    const moves = history.map((step, move) => {
      const lastMoveLocation = step.lastMoveLocation;
      const col = (lastMoveLocation % 3) + 1;
      const row = Math.floor(lastMoveLocation / 3) + 1;
      const desc = move
        ? `Go to move #${move} (${col}, ${row})`
        : "Go to game start";
      return (
        <li key={move}>
          <button
            className={move === stepNumber ? "selected" : ""}
            onClick={() => this.jumpTo(move)}
          >
            {desc}
          </button>
        </li>
      );
    });

    const isAscending = this.state.isAscending;
    if (!isAscending) moves.reverse();

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button onClick={() => this.handleSortToggle()}>
            {isAscending ? "Sort descending" : "Sort ascending"}
          </button>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
