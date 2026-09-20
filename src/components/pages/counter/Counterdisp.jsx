import { useState } from "react"


const Counterdisp = function(){
let [count, setCount] = useState(0);

let handleIncr = function(){
setCount(count++);
}

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