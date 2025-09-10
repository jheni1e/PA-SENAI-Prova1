import { useState } from "react";
import './index.css'

export default function Counter() {
    const [count , setCount] = useState(0);

    const increase = () => {
        setCount(count => count + 1)
    }

    const decrease = () => {
        setCount(count => count - 1)
    }

    return (
        <>
        <div className="buttons">
            <button onClick={decrease} style={{ width: '60px', height: '60px', margin: '10px'}}>-</button>
            <h3 style={{ fontWeight: 'normal' }}>Contagem: {count}</h3>
            <button onClick={increase} style={{ width: '60px', height: '60px', margin: '10px'}}>+</button>
        </div>
        </>
    )
}