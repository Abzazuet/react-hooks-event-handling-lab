// Code Keypad Component Here

import React from "react";
function Keypad() {
    function passwordChange(event) {
        console.log("Entering password...");
    }
    return (
        <input type="password" onChange={passwordChange}></input>
    );
}

export default Keypad;