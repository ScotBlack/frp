import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Food from "./pages/Food";
import Projects from "./pages/Projectz";
import Settings from "./pages/Settings";

const AppRouter = () => {
    return (
        <Router>
            <div className="frame">

                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/food" element={<Food />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </Router>
    );
};

export default AppRouter;
