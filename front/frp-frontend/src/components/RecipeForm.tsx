import { useState, useEffect } from "react";

interface RecipeFormProps {
    onSubmit: (formData: { name: string; description: string }) => void;
    selectedRecipe: { name: string; description: string } | null;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ onSubmit, selectedRecipe  }) => {
    const [formData, setFormData] = useState({ name: "", description: "" });

    // Update form when a new recipe is selected
    useEffect(() => {
        if (selectedRecipe) {
            setFormData(selectedRecipe);
        }
    }, [selectedRecipe]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ name: "", description: "" }); // Reset form
    };

    return (
        <form onSubmit={handleSubmit} className="recipe-form">
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default RecipeForm;
