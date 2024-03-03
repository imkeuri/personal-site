
import './App.css'
import Navbar from "./components/navbar/navbar.tsx";
import Home from "./pages/home/Home.tsx";
import Footer from "./components/footer/Footer.tsx";
import {Routes, Route} from "react-router-dom";

function App() {

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer/>
        </>
    )
}

export default App;
