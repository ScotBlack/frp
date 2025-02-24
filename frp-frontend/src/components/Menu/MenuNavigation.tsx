import { Link } from "react-router-dom";
import MenuNavigationTile from "./MenuNavigationTile";

const MenuNavigation = () => {
    return (
        <div className="menu-navigation">
            <span className="header">NAVIGATION</span>
            <MenuNavigationTile link="/" icon="home" name="Home" />
            <MenuNavigationTile link="/calendar" icon="calendar_month" name="Calendar" />
            <MenuNavigationTile link="/projects" icon="construction" name="Projects" />
            <MenuNavigationTile link="/food" icon="fastfood" name="Food" />
            <MenuNavigationTile link="/settings" icon="tune" name="Settings" />
        </div>
    );
};

export default MenuNavigation;
