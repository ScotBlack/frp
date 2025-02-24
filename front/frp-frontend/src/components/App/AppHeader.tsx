

interface AppHeaderProps {
    name: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ name }) => {

    return (
        <div className="app-header">
            <span>{name}</span>
        </div >
    );
}
export default AppHeader;