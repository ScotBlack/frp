import React, { useEffect, useState } from "react";
import Col from "../Col";
import Row from "../Row";

interface Recipe {
    id: number;
    name: string;
}

interface DropdownFormControlProps {
    id: string;
    label: string;
    value: number | null;
    onChange: (value: number) => void;
}

const Dropdown: React.FC<DropdownFormControlProps> = ({id,  label, value, onChange }) => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/recipes")
            .then((response) => response.json())
            .then((data) => {
                setRecipes(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching recipes:", error);
                setError("Failed to load recipes.");
                setLoading(false);
            });
    }, []);

    return (
        <Row className="row-1">
            <Col size="4">
                <label htmlFor={id} className="label">{label}</label>
            </Col>
            <Col size="8">
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p className="text-danger">{error}</p>
                ) : (
                    <select className="control" value={value ?? ""} onChange={(e) => onChange(Number(e.target.value))}>
                        <option value="" disabled>Select a recipe</option>
                        {recipes.map((recipe) => (
                            <option key={recipe.id} value={recipe.id}>
                                {recipe.name}
                            </option>
                        ))}
                    </select>
                )}
            </Col>
        </Row>
    );
};

export default Dropdown;