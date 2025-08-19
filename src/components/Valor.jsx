import { PrimeiroContexto } from "../App"

export function Valor() {

    return (
        <PrimeiroContexto.Consumer>
            {(value) => {
                return <h1>{value.valor}</h1>
            }}
        </PrimeiroContexto.Consumer>
    )
}