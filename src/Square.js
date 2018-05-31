import React from 'react'

export function Square(props) {
    let {style, onPaint, onErase, square} = props;

    if (props.hit) {
        style = {
            ... style,
            backgroundColor: `#${props.hit}`,
            color: `#${props.hit}`
        }
    }

    return (
        <span 
            onMouseDown={onPaint}
            onMouseEnter={(e) => { if (e.buttons & 1 == 1) onPaint() }}
            className="block" 
            style={style} >
            {square.x}, {square.y}
        </span>
    )
}