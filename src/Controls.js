import React from 'react';
import { Input } from './Input';
import { SketchPicker } from 'react-color';

function Controls(props) {
    const { 
        height, 
        width, 
        color,
        dimen,
        onHeightChange, 
        onWidthChange,
        onColorChange,
        onDimenChange,
        onClear
    } = props;

    return (
        <div className="controls">
            <button onClick={onClear}>CLEAR</button>
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
            <SketchPicker
                color={color}
                onChange={(e) => onColorChange(e.hex.substring(1))} />
            
        </div>
    )
}

export default Controls;