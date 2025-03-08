import { useEffect, useState } from "react";

const FoodQuery = () => {
    const [data, setData] = useState<string>("Loading...");

    useEffect(() => {
        fetch("http://127.0.0.1:5000/users")
            .then((response) => response.json()) // Assuming the backend returns JSON
            .then((data) => setData(JSON.stringify(data))) // Convert to string for display
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1>Food Data</h1>
            <p>{data}</p>
        </div>
    );
};

export default FoodQuery;
