import Nav from "./Nav"
import { Outlet } from 'react-router-dom'
const Rootlayout = function(){

    return(
        <>
        <Nav></Nav>
        <Outlet></Outlet>
        </>
    )
}

export default Rootlayout