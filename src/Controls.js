import React from 'react';
import { Input } from './Input';

function Controls(props) {
    const { 
        height, 
        width, 
        color,
        dimen,
        onHeightChange, 
        onWidthChange,
        onColorChange,
        onDimenChange
    } = props;

    return (
        <div className="controls">
            <Input 
                displayName="Cell Dimensions:"
                name="cells"
                value={dimen}
                onChange={(e) => onDimenChange(e.target.value)} />
            <Input 
                displayName="Height:"
                name="height"
                value={height}
                onChange={(e) => onHeightChange(e.target.value)} />
            <Input 
                displayName="Width:"
                name="width"
                value={width}
                onChange={(e) => onWidthChange(e.target.value)} />
            <Input
                displayName="Color:"
                name="color"
                value={color}
                onChange={(e) => onColorChange(e.target.value)} />
        </div>
    )
}

export default Controls;