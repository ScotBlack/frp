import Col from "../Col";
import Row from "../Row";

interface FormControlProps {
    label: string;
    id: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<FormControlProps> = ({ label, id, type = "text", value, onChange }) => {
    return (
        <Row className="row-1">
            <Col size="4">
                <label htmlFor={id} className="label">{label}</label>
            </Col>
            <Col size="8">
                <input id={id} type={type} className="control" value={value} onChange={onChange} />
            </Col>
        </Row>
    );
}

export default InputText;