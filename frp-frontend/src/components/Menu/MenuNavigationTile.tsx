import { Link } from "react-router-dom";

interface MenuNavigationProps {
    link: string;
    icon: string;
    name: string;
}

const MenuNavigationTile: React.FC<MenuNavigationProps> = ({ link, icon, name }) => {
    return (
        <Link to={link}>
            <div className="tile">
                <span className="material-symbols-outlined">
                    {icon}
                </span>
                <span>
                    {name}
                </span>
            </div>
        </Link>
    );
}

export default MenuNavigationTile;