import { useCounter } from "../../../contexts/CounterContext"

const Counterdisp = function(){
let { count } = useCounter();
    return(
        <section className="my-1">
            <div className="container">
                <div className="text-xl font-bold capitalize">
                    display: {count}
                </div>
            </div>
        </section>
    )
}

export default Counterdisp