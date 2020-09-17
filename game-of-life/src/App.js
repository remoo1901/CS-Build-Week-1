import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: [90, 20],
    };

    this.handleColumnChange = this.handleColumnChange.bind(this);
    this.handleRowChange = this.handleRowChange.bind(this);
    this.startGame = this.startGame.bind(this);
    this.stopGame = this.stopGame.bind(this);
    this.renderBoard = this.renderBoard.bind(this); 
  }

  handleRowChange(event) {}

  handleColumnChange(event) {}

  startGame() {}

  stopGame() {}

  runGame() {}

  renderBoard() {}

  render() {
    return (
      <div className="worldContainer">
        <div className="headerContainer">
          <div className="headerInnerContainer">

            <label classname="label">
              Row:
              <input
                className="input"
                type="text"
                value={this.state.size[1]}
                onChange={this.handleRowChange}
              />
            </label>

            <label classname="label">
              Columns:
              <input
                className="input"
                type="text"
                value={this.state.size[0]}
                onChange={this.handleColumnChange}
              />

            </label>

          </div>
          <div className="headerButtons">

            <button className="submit" onClick={this.startGame}>
              Start
            </button>

            <button className="submit" onClick={this.stopGame}>
              Stop
            </button>

          </div>
          Generation:
        </div>

        <div className="boardContainer">{this.renderBoard()}</div>
      </div>
    );
  }
}
