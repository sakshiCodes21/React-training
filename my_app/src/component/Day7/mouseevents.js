import React, { useState } from 'react';

function Toggle() {
    const [showText, setShowText] = useState(false);

    const handleMouseDown = () => {
        setShowText(false);
    };

    const handleMouseUp = () => {
        setShowText(true);
    };

    return (
        <div>
            <button onMouseMove={handleMouseDown} onMouseDown={handleMouseUp}>Toggle Text</button>
            {showText && <p>This is the hidden text.</p>}
        </div>
    );
}

export default Toggle;
