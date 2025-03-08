import ListItem from "./ListItem";
import './ListComponent.css';
import ListHeader from "./ListHeader";

interface ListComponentProps {
    data: string;
    onItemClick: (item: any) => void;
}


const ListComponent: React.FC<ListComponentProps> = ({ data, onItemClick }) => {
    const parsedData = JSON.parse(data);

    return (
        <div className="list-component col-8">
            Recepten
            <ListHeader />
            {parsedData.map((item, index) => (
                <ListItem key={index} item={item} onClick={() => onItemClick(item)} />
            ))}

        </div >
    );
}
export default ListComponent;
