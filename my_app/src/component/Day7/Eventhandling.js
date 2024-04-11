import React, { useState } from 'react';

 function MyForm1() {
    const [textInput, setTextInput] = useState('');
    const [radioValue, setRadioValue] = useState('');
    const [selectValue, setSelectValue] = useState('');

    const TextChange = (event) => {
        setTextInput(event.target.value);
    };

    
    const RadioChange = (event) => {
        setRadioValue(event.target.value);
    };

    const SelectChange = (event) => {
        setSelectValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
       
       
        alert(` you selected  ${textInput},${radioValue},${selectValue} `);

    };

    return (
        <>
        <p>name:{textInput}</p>
        <form onSubmit={handleSubmit}>
            <label>
                Text Input:
                <input type="text" value={textInput} onChange={TextChange} />
            </label>
            <br />
            <label>
                Radio Button:
                <input type="radio" value="Male" checked={radioValue === 'Male'} onChange={RadioChange} />
                Male
                <input type="radio" value="Female" checked={radioValue === 'Female'} onChange={RadioChange} />
                Female
            </label>
            <br />
            <label>
                Dropdown List:
                <select value={selectValue} onChange={SelectChange}>
                    <option value="">Select an Country</option>
                    <option value="pune">Pune</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="banglore">Banglore</option>
                </select>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
        </>
    );
}
export default MyForm1;

