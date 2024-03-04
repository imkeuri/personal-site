
import './App.css'
import Navbar from "./components/navbar/navbar.tsx";
import Home from "./pages/home/Home.tsx";
import Footer from "./components/footer/Footer.tsx";
import {Routes, Route} from "react-router-dom";
import PageInProgress from "@/pages/information/PageInProgress.tsx";

function App() {

    return (
        <>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<PageInProgress />} />
                    <Route path="/contact" element={<PageInProgress />} />
                    <Route path="/portfolio" element={<PageInProgress />} />

                </Routes>
            <Footer/>
        </>
    )
}

export default App;
