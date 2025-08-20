import { useCount } from "../contexts/CountContext"

export function Valor() {
    const { count } = useCount()

    return <h1>{count}</h1>
}