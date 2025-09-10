import { useState } from 'react'

export default function Visible({ text }) {
    const [isVisible, setVisible] = useState(true);

    return (
        <>
        {isVisible && 
        <h3 style={{ fontWeight: 'normal' }}>{text}</h3>}
        <button onClick={() => setVisible(!isVisible)}>{isVisible ? 'Hide' : 'Show'}</button>
        </>
    );
}