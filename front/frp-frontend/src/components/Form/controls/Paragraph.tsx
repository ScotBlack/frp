import Col from "../Col";
import Row from "../Row";

interface ParagraphProps {
    label: string;
    id: string;
   
}

const Paragraph: React.FC<ParagraphProps> = ({ label, id}) => {
    return (
        <Row className="">
            <Col size="12">
                <span className="paragraph">{label}</span>
            </Col>
        </Row>
    );
}

export default Paragraph;