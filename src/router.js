import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Teste from './components/Login/Teste'

function Routers() {
    return (
        <>
            <Router>

                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/teste" element={<Teste />} />
                        {/* <Route path="/contact" element={<Contact />} />
                        <Route path="/reserve" element={<RTable />} />
                        <Route path="/terminal" element={<Terminal />} /> */}
                    </Routes>
                </div>
            </Router>
        </>
    )
}
export default Routers;