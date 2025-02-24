import { Link } from "react-router-dom";
import "./Menu.css";
import MenuHeader from "./MenuHeader";
import MenuNavigation from "./MenuNavigation";
import MenuFooter from "./MenuFooter";

const Menu = () => {
    return (
        <div className="menu">
            <MenuHeader />
            <MenuNavigation />
            <MenuFooter />
        </div>
    );
};

export default Menu;
