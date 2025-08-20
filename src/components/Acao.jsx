import { useCount } from '../contexts/CountContext'

export function Acao() {
    const { increment, decrement } = useCount()

    return (
        <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={increment}>+ 1</button>
            <button onClick={decrement}>- 1</button>
        </div>
    )
}