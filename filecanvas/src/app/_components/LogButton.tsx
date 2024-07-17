"use client"

import logClick from "../functions/serverLog";

const LogButton = () => {
    const handleClick = async () => {
        await logClick();
    };

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}

export default LogButton;