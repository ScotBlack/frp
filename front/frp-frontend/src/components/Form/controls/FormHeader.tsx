import Col from "../Col";
import Row from "../Row";

interface HeaderProps {
    label: string;
    id: string;
   
}

const InputText: React.FC<HeaderProps> = ({ label, id}) => {
    return (
        <Row className="row-2">
            <Col size="12">
                <span className="form header">{label}</span>
            </Col>
        </Row>
    );
}

export default InputText;