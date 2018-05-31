import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';
import Controls from './Controls';

class App extends Component {
  constructor(props) {
    super(props)

    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleWidthChange = this.handleWidthChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleDimenChange = this.handleDimenChange.bind(this);
    this.buildBoard = this.buildBoard.bind(this);
    this.onClick = this.onClick.bind(this);
    this.parseQuery = this.parseQuery.bind(this);
    this.onQueryChange = this.onQueryChange.bind(this);
    this.setState = this.setState.bind(this);

    this.props.onQueryChange.onChange = this.onQueryChange;

    const { query: qs } = this.props;
    const w = qs["w"] || 30;
    const h = qs["h"] || 20;

    this.state = {
      dimen: qs["d"] || 30,
      width: w,
      height: h,
      board: this.buildBoard(w, h),
      hits: this.parseQuery(this.props.query),
      step: 0,
      color: qs["c"] || "red"
    }
  }
  
  onQueryChange(qs) {
    super.setState({
      hits: this.parseQuery(qs),
      dimen: qs["d"],
      height: qs["h"],
      width: qs["w"],
      color: qs["c"]
    });
  }

  parseQuery(qs) {
    const hits = new Map();
    for (let k in qs) {
      if (/\d+-\d/.test(k)) {
        hits.set(k, qs[k]);
      }
    }
    return hits;
  }

  setState(newState) {
    const { hits, color, width, height, dimen } = {
      ...this.state,
      ...newState,
    };
    let qs = "";
    let map = {
      c: color,
      w: width,
      h: height,
      d: dimen,
    };
    for (let i in map) {
      qs += `${i}=${map[i]}&`;
    }
    hits.forEach((v,k) => qs += `${k}=${v}&`);
    qs = qs.substring(0, qs.length - 1);
    this.props.updateQuery(hits, `Step ${this.state.step}`, qs);

    super.setState(newState);
  }

  onClick(x, y) {
    const hits = new Map(this.state.hits);
    const key = `${x}-${y}`;
    if (hits.get(key)) {
      hits.delete(key);
    } else {
      hits.set(key, this.state.color);
    }

    this.setState({
      hits: new Map(hits),
      step: this.state.step + 1
    });
  }

  buildBoard(bw, bh) {
    const board = [];

    for (let x = 0; x < bh; x++) {
        const row = [];
        for (let y = 0; y < bw; y++) {
            row.push({x,y});
        }
        board.push(row);
    }
    return board;
  }

  render() {
    return (
      <div className="App">
        <Board 
            board={this.state.board} 
            hits={this.state.hits}
            width={this.state.dimen}
            height={this.state.dimen}
            onClick={this.onClick}
        />
        <Controls
            width={this.state.width}
            height={this.state.height}
            color={this.state.color}
            dimen={this.state.dimen}
            onDimenChange={this.handleDimenChange}
            onHeightChange={this.handleHeightChange}
            onWidthChange={this.handleWidthChange}
            onColorChange={this.handleColorChange}
            />
      </div>
    );
  }

  handleHeightChange(h) {
    this.setState({
      height: h,
      board: this.buildBoard(this.state.width, h)
    });
  }

  handleWidthChange(w) {
    this.setState({
      width: w,
      board: this.buildBoard(w, this.state.height)
    });
  }

  handleColorChange(c) {
    this.setState({
      color: c
    });
  }

  handleDimenChange(d) {
    this.setState({
      dimen: d
    });
  }
}

export default App;
