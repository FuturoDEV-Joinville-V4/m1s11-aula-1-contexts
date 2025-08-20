import { Acao } from './components/Acao'
import { Valor } from './components/Valor'
import { CountProvider } from './contexts/CountContext'



function App() {

  return (
    <>
      <h1>Estados globais com React Context</h1>

      <CountProvider>
        <div style={{ width: '100%', display: 'flex',alignItems: 'center', gap: 16, padding: 32}}>
          <Valor />
          <Acao />
        </div>
      </CountProvider>
    </>
  )
}

export default App
