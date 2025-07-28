import { useContext } from 'react'
import './App.css'
import { Contexto } from './context'

function App() {

  const {data, estadoF} = useContext(Contexto)

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={() => estadoF("ativado")}>
        ativado
      </button>
      <button onClick={() => estadoF("inativado")}>
        inativado
      </button>
      <button onClick={() => estadoF("pendente")}>
        pendente
      </button>
    </div>
  )

}

export default App
