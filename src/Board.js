import React from 'react';
import { Square } from './Square';

function Board(props) {
    if (props.board.length == 0) {
        return <div/>
    }

    let style = {
        width: parseInt(props.width),
        height: parseInt(props.height)
    }

    let boardStyle = {
        width: props.width * (props.board[0].length)
    }

    return (
        <div className="board" style={boardStyle}>
            {props.board.map((row, i) =>
                <div className="row" key={i}>
                    {row.map((col, j) =>
                        <Square 
                            onClick={() => props.onClick(i, j)}
                            key={`${i}-${j}`}
                            square={col} 
                            hit={props.hits.get(`${i}-${j}`)}
                            style={style} />
                    )}
                </div>
            )}
        </div>
    );
}

export default Board;