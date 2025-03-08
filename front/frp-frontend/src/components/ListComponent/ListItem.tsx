
interface ListItemProps {
    item: any;
    onClick: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ item, onClick }) => {
    return (
        <div className="list-item" onClick={onClick} >
            <h3>{item.name}</h3>
            <p>{item.description}</p>

            <div className="ingredients">
                {item.ingredients.map((ingredient) => (
                    <span key={ingredient.id} className="ingredient-tag">
                        {ingredient.name} ({ingredient.quantity} {ingredient.uom})
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ListItem;