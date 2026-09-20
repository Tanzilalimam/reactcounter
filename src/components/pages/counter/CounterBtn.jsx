import Btn from "../../../ui/Btn"

const CounterBtn = function({handleIncr, handleDcr}){
function handleIncr(){
    console.log('incr clicked');
}
function handleDcr(){
    console.log('dcr clicked');
}
function reset(){
    console.log('reset clicked');
}

    return(
        <section className="my-1">
            <div className="container">
                <div className="flex gap-2">
                <Btn className="bg-green-300 hover:bg-green-600 hover:text-white" text='incr+' onclick={handleIncr}></Btn>                
                <Btn className="bg-blue-300 hover:bg-blue-600 hover:text-white" text='reset' onclick={reset}></Btn>
                <Btn className="bg-red-300 hover:bg-red-600 hover:text-white" text='dcr-' onclick={handleDcr}></Btn>
                </div>
            </div>
        </section>
    )
}

export default CounterBtn