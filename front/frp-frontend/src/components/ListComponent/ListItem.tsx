
interface ListItemProps {
    item: any;
    onClick: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ item, onClick }) => {
    return (
        <div className="list-item" onClick={onClick} >
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Rating: {item.rating}</p>
        </div>
    );
};

export default ListItem;