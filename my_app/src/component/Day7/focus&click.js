import React,{useState} from "react";
 function MyForm2() {
    const [focusCount, setFocusCount] = useState(0);
    const [clickCount, setClickCount] = useState(0);

    const handleFocus = () => {
        setFocusCount(focusCount + 1);
    };

    const handleClick = () => {
        setClickCount(clickCount + 1);
    };

    return (
        <div>
            <input type="text" onFocus={handleFocus} placeholder="Click here to focus" />
            <button onClick={handleClick}>Click me</button>
            <p>Focus count: {focusCount}</p>
            <p>Click count: {clickCount}</p>
        </div>
    );
}
export default MyForm2;

