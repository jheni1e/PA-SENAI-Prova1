import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Text from './components/Texts'
import Visible from './components/Visible';
import Texts from './components/Texts';

function App() {
  const [text, setText] = useState("");
  
  return (
    <>
      <h2>Contador com dois botões (incrementar/decrementar)</h2>
      <Counter></Counter>
      <br/>
      <h2>Campo de texto atualizado em tempo real</h2>
      <Texts></Texts>
      <br/>
      <h2>Botão de alternar a visibilidade</h2>
      <Visible text="oiiiiiiiiii"></Visible>
    </>
  )
}

export default App
