import React from 'react';

function Doubleclick() {
    const Double = () => {
        alert("you click 2 times");
    };

    return (
        <div>
            <button onDoubleClick={Double}>Click 2 times</button>
        </div>
    );
}

export default Doubleclick;