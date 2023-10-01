import React, { useState, useEffect } from "react";
import reactLogo from '../../assets/react.svg'
import "./index.css";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [showConditionalRendering, setShowConditionalRendering] = useState(false);

    // fungsi tambah
    const countUp = () => {
        setCount(count + 1)
    };

    // fungsi kurang
    const countDown = () => {
        setCount(count - 1);
    };

    useEffect(() => {
        if (count === 10) {
            setShowConditionalRendering(true);
            document.documentElement.style.setProperty("--background-color", "black");
        } else {
            setShowConditionalRendering(false);
            document.documentElement.style.setProperty("--background-color", "#282c34");
        }
    }, [count]);

    return (
        <>
        <div className="Main">
            <h3> Tugas Modul 3 Kelompok 8 </h3>

            <div className="ViewImage">
                {count === 10 && (
                    <div className="ViewImage1">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </div>
                )}
            </div>
            <p className="Text">{count}</p>
            <div className="ViewButton">
                <div className="ViewButton2">
                    <button style={{
                        backgroundColor: 'rgb(8, 236, 38)',
                        borderRadius: '10px',
                        fontSize: '20px',
                        color: 'black'
                    }} onClick={countUp}> +
                    </button>
                </div>
                <div className="ViewButton1">
                    <button style={{
                        backgroundColor: 'rgb(8, 236, 38)',
                        borderRadius: '10px',
                        fontSize: '20px',
                        color: 'black'
                    }} onClick={countDown}> -
                    </button>
                </div>
            </div>
            {showConditionalRendering && (
                <div>
                    <p>Count Udah 10 jon!</p>
                </div>
            )}
        </div>
        </>
    );
}
