import ListItem from "./ListItem";
import './ListComponent.css';
import ListHeader from "./ListHeader";

interface ListComponentProps {
    data: any[];
    onItemClick: (item: any) => void;
}
const ListComponent: React.FC<ListComponentProps> = ({ data, onItemClick }) => {

    return (
        <div className="list-component">
            Recepten
            <ListHeader />
            {data.map((item, index) => (
                <ListItem key={index} item={item} onClick={() => onItemClick(item)} />
            ))}

        </div >
    );
}
export default ListComponent;
