import React from 'react';

function CopyComponent() {
    const handleCopy = () => {
        alert("you just copied text");
    };

    return (
        <div>
            <p onCopy={handleCopy}>Copy this text and see magic.</p>
        </div>
    );
}

export default CopyComponent;
