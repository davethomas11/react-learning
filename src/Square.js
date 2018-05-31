import React from 'react'

export function Square(props) {
    let {style, onClick, square} = props;

    if (props.hit) {
        style = {
            ... style,
            backgroundColor: props.hit
        }
    }

    return (
        <span 
            onClick={onClick}
            className="block" 
            style={style} >
            {square.x}, {square.y}
        </span>
    )
}