import { PrimeiroContexto } from "../App";

export function Acao() {
    return (
        <PrimeiroContexto.Consumer>
            {(valor) => {
                return <button onClick={valor.acao}>Adicionar mais um</button>
            }}
        </PrimeiroContexto.Consumer>
    )
}