import {useState, useEffect} from "react";
import Header from './components/Header'
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    const [showForm, setShowForm] = useState(false);

    // toggleForm
    const toggleForm = () => setShowForm(!showForm);

    return (
        <Router>
            <div className="container">
                <Header onToggle={toggleForm} showAdd={!showForm}/>
                <Routes>
                    <Route path={'/'} element={<Home showForm={showForm}/>}/>
                    <Route path={"/about"} element={<About/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
