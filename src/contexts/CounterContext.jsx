import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export function CounterProvider({children}){
    let [count, setCount] = useState(0);
    let handleIncr = function(){
        setCount(function(prevCount){
            return prevCount+1;
        });
    }
    let handleDcr = function(){
        setCount(function(prevCount){
            return prevCount-1;
        })
    }
    let reset = function(){
        setCount(0);
    }

    return(
        <CounterContext.Provider value={{count, handleIncr, handleDcr, reset}}>
            {children}
        </CounterContext.Provider>
    )

}

export function useCounter(){
    return useContext(CounterContext);
}