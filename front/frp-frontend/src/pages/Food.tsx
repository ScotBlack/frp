import { useEffect, useState } from "react";
import AppContent from "../components/App/AppContent";
import AppHeader from "../components/App/AppHeader";
import ListComponent from "../components/ListComponent/ListComponent";
import FoodQuery from "../test/FoodQuery";
import RecipeForm from "../components/RecipeForm";
import Form from "../components/Form/Form";




const Food: React.FC = () => {

    const [ingredients, setIngredients] = useState<string>("[]");
    
    useEffect(() => {
        fetch("http://127.0.0.1:5000/recipes")
            .then((response) => response.json()) // Assuming the backend returns JSON
            .then((data) => setIngredients(JSON.stringify(data))) // Convert to string for display
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const [selectedItem, setSelectedItem] = useState<any | null>(null);

    const handleItemClick = (item: any) => {
        setSelectedItem(item); // Update state to trigger re-render in ComponentB
    };

    const handleFormSubmit = async (data: { id: string; name: string; description: string }) => {
        console.log("Form submitted:", data);
        
        try {
            const response = await fetch("http://127.0.0.1:5000/recipes/" + data.id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to submit recipe");
            }

            console.log("Recipe submitted successfully!");
        } catch (error) {
            console.error("Error submitting recipe:", error);
        }
    };

    return (

        <AppContent>
            <AppHeader name={"Food    >    Recepten"} />
            <div className="flex-box">
                <ListComponent data={ingredients} onItemClick={handleItemClick} />
                <Form id='11' />
            </div>
        </AppContent>

    )
}

export default Food;

// const DummyData = [
//     {
        
//         "name": "Creamy Tomato Basil Pasta",
//         "description": "A rich and creamy tomato-based pasta dish with a touch of basil and garlic.",
//         "rating": 4.5
//     },
//     {
//         "name": "Spicy Coconut Chicken Curry",
//         "description": "A spicy and flavorful chicken curry cooked with coconut milk and aromatic spices.",
//         "rating": 5
//     },
//     {
//         "name": "Fresh Summer Salad",
//         "description": "A refreshing summer salad with mixed greens, feta cheese, and a lemon vinaigrette.",
//         "rating": 4
//     },
//     {
//         "name": "Hearty Vegetable Lentil Soup",
//         "description": "A hearty vegetable soup packed with carrots, potatoes, and lentils, perfect for cold days.",
//         "rating": 4.2
//     },
//     {
//         "name": "Classic Chocolate Chip Cookies",
//         "description": "A classic chocolate chip cookie recipe with a crispy edge and chewy center.",
//         "rating": 4.8
//     }
// ]