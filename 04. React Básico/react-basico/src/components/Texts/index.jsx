import { useState } from 'react'

export default function Texts() {
    const [text, setText] = useState("");

    return (
        <>
            {text.length > 0 &&
            <h3 style={{ fontWeight: 'normal'}}>{text}</h3>}
            {text.length == 0 &&
            <h3 style={{ fontWeight: 'normal'}}>Digite algo!</h3>}
            
            <input type="text" onChange={(e) => setText(e.target.value)} style={{border:'1px solid gainsboro', height: '20px'}}></input>
        </>
    )
}