import { useState } from "react";
import AppContent from "../components/App/AppContent";
import AppHeader from "../components/App/AppHeader";
import ListComponent from "../components/ListComponent/ListComponent";
import FoodQuery from "../test/FoodQuery";


const DummyData = [
    {
        "name": "Creamy Tomato Basil Pasta",
        "description": "A rich and creamy tomato-based pasta dish with a touch of basil and garlic.",
        "rating": 4.5
    },
    {
        "name": "Spicy Coconut Chicken Curry",
        "description": "A spicy and flavorful chicken curry cooked with coconut milk and aromatic spices.",
        "rating": 5
    },
    {
        "name": "Fresh Summer Salad",
        "description": "A refreshing summer salad with mixed greens, feta cheese, and a lemon vinaigrette.",
        "rating": 4
    },
    {
        "name": "Hearty Vegetable Lentil Soup",
        "description": "A hearty vegetable soup packed with carrots, potatoes, and lentils, perfect for cold days.",
        "rating": 4.2
    },
    {
        "name": "Classic Chocolate Chip Cookies",
        "description": "A classic chocolate chip cookie recipe with a crispy edge and chewy center.",
        "rating": 4.8
    }
]


const Food: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<any | null>(null);

    const handleItemClick = (item: any) => {
        setSelectedItem(item); // Update state to trigger re-render in ComponentB
    };

    return (

        <AppContent>
            <AppHeader name={"Food    >    Recepten"} />
            <ListComponent data={DummyData} onItemClick={handleItemClick} />
            <span>{selectedItem ? selectedItem.name : "No item selected"}</span>
            <FoodQuery />
        </AppContent>

    )
}

export default Food;