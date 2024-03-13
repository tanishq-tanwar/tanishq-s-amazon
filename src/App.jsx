import { Routes, Route } from "react-router-dom"
import Save from "./Save"
import Show from "./Show"
import Layout from "./Layout"
import About from "./About"

const App = () => {
    
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='' element={<About />} />
                    <Route path='products' element={<Save/>} />
                    <Route path='cart' element={<Show/>} />
                </Route>
            </Routes>
        </>
    )
}

export default App 