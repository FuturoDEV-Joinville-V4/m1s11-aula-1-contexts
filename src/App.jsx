import { createContext, useState } from 'react'
import { Acao } from './components/Acao'
import { Valor } from './components/Valor'

export const PrimeiroContexto = createContext({
  valor: 0,
  acao: () => {}
})

function App() {
  const [valor, setValor] = useState(100)

  function handleAction() {
    setValor(valor + 1)
  }

  return (
    <>
      <h1>Estados globais com React Context</h1>

      <PrimeiroContexto.Provider value={{ valor, acao: handleAction }}>
        <div style={{ width: '100%', display: 'flex',alignItems: 'center', gap: 16, padding: 32}}>
          <Valor />
          <Acao />
          {/* <PrimeiroContexto.Consumer>
            {(value) => {
              console.log(value)
            }}
          </PrimeiroContexto.Consumer> */}
        </div>
      </PrimeiroContexto.Provider>
    </>
  )
}

export default App
