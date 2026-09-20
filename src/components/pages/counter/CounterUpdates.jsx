import Para from "../../../ui/Para";

const CounterUpdates = function({count}){
let state = 'neutral';
let color = 'text-blue-600';
if(count < 0){
    state = 'negative';
    color = 'text-red-600';
}
else if(count > 0){
    state = 'positive';
    color = 'text-green-600';
}

    return(
        <section className="my-1">
            <div className="container">
                <div>
                <Para className={`${color}`} text={state}></Para>
                </div>
            </div>
        </section>
    )
}

export default CounterUpdates