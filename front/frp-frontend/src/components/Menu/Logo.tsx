import React from "react";

const Logo: React.FC = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 300"
            width="80"
        // height="300"
        >
            {/* Hexagon background with grey fill and teal border */}
            <polygon
                points="290,150 220,271.24 80,271.24 10,150 80,28.76 220,28.76"
                fill="#e0e0e0"
                stroke="#008080"
                strokeWidth="10"
            />

            {/* Family Members: Three circles representing heads */}
            <circle cx="120" cy="120" r="20" fill="#008080" />
            <circle cx="150" cy="100" r="20" fill="#008080" />
            <circle cx="180" cy="120" r="20" fill="#008080" />

            {/* Connecting line for the family */}
            <path
                d="M120,140 Q150,180 180,140"
                fill="none"
                stroke="#008080"
                strokeWidth="8"
                strokeLinecap="round"
            />

            {/* Planning element: A check mark */}
            <polyline
                points="120,190 140,210 190,150"
                fill="none"
                stroke="#008080"
                strokeWidth="10"
                strokeLinecap="round"
            />

            {/* Optional: App Name Text */}
            {/* <text
                x="150"
                y="280"
                textAnchor="middle"
                fontFamily="Arial, sans-serif"
                fontSize="24"
                fill="#008080"
            >
                Family Resource
            </text> */}
        </svg>
    );
};

export default Logo;
