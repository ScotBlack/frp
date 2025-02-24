import { Children, ReactNode } from "react";
import './App.css';

interface AppContentProps {
    children: ReactNode;
}

const AppContent: React.FC<AppContentProps> = ({ children }) => {

    return (
        <div className="app-content">
            {children}
        </div >
    );
}
export default AppContent;