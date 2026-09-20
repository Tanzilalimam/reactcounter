import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Rootlayout from "./components/layouts/Rootlayout";
import HomeIndex from "./pages/HomeIndex";
import CounterIndex from "./pages/CounterIndex";

const routerValue = createBrowserRouter(
  createRoutesFromElements(
  <>
    <Route element={<Rootlayout />}>
      <Route path='/' element={<HomeIndex/>}></Route>
      <Route path='/counter' element={<CounterIndex/>}></Route>

    </Route>
  </>
)
);

function App() {

  return (
    <RouterProvider router={routerValue} />
  )
}

export default App
