// Col.tsx
import React from "react";

interface ColProps {
    size: string; // Example: "md-6" -> "col-md-6"
    children: React.ReactNode;
}

const Col: React.FC<ColProps> = ({ size, children }) => {
    return <div className={`col-${size}`}>{children}</div>;
};

export default Col;
