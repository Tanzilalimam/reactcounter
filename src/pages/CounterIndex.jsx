import { CounterProvider } from "../contexts/CounterContext"
import CounterUpdates from "../components/pages/counter/CounterUpdates"
import Counterdisp from "../components/pages/counter/Counterdisp"
import CounterBtn from "../components/pages/counter/CounterBtn"

const CounterIndex = function(){

    return(
        <>
        <CounterProvider>
        <CounterUpdates></CounterUpdates>
        <Counterdisp></Counterdisp>
        <CounterBtn></CounterBtn>
        </CounterProvider>
        </>
    )
}

export default CounterIndex