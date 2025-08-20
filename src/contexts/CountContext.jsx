import { createContext, useContext, useState } from 'react'

/**
 * Contexto do contador
 * exports
 */
export const CountContext = createContext({
    count: 0,
    increment: () => {},
    decrement: () => {}
})

/** 
 * Componente provedor
 */

export function CountProvider(props) {
    const [count, setCount] = useState(0)

    /**
     * Adicionar um a variavel
     */
    function increment() {
        setCount(count + 1)
    }
    /**
     * Diminui um a variavel
     */
    function decrement() {
        setCount(count - 1)
    }

    return <CountContext.Provider value={{ count, increment, decrement }}>{props.children}</CountContext.Provider>
}

/** 
 * Hook personalizado para o uso do contexto
 */
export function useCount() {
    const context = useContext(CountContext)

    return context
}