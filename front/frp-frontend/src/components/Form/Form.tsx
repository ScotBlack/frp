import React, { useState } from "react";
import Col from "./Col";
import Row from "./Row";
import InputText from "./controls/InputText";
import Dropdown from "./controls/Dropdown";
import FormHeader from "./controls/FormHeader";
import Paragraph from "./controls/Paragraph";
import './Form.css';

interface AppContentProps {
    id: string;
}

const Form: React.FC<AppContentProps> = ({ id }) => {
    // 🔥 Single JSON state for the entire form
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        selectedUOM: null as number | null,
    });

    // Generic handler for all input changes
    const handleChange = (name: string, value: string | number | null) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="widget form col-4">
            <div className="col-12">
                <FormHeader label="Recipe" id="header_1" />
                <Paragraph
                    label="Fill out the details below to create a delicious recipe that you can easily follow, share with others, and enjoy anytime. Whether it's a family favorite or a new experiment, every great dish starts with the right ingredients and instructions. Take your time, be precise, and let your creativity shine in the kitchen!"
                    id="header_1"
                />

                {/* Inputs using a single JSON state */}
                <InputText
                    label="Name"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                />
                <InputText
                    label="Description"
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                />
                <Dropdown
                    id="uom"
                    label="UOM"
                    value={formData.selectedUOM}
                    onChange={(value) => handleChange("selectedUOM", value)}
                />

            <Paragraph
                    label={JSON.stringify(formData)}
                    id="header_1"
                />
            </div>
        </div>
    );
};

export default Form;

// interface AppContentProps {
//     id: string;
// }

// const Form: React.FC<AppContentProps> = ({ id }) => {
//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");
//     const [selectedUOM, setSelectedUOM] = useState<number | null>(null);

//     return (
//         <div className="widget form col-6">
//             <Col size='12'>
//                 <FormHeader label="Recipe" id="header_1" />
//                 <Paragraph label="Fill out the details below to create a delicious recipe that you can easily follow, share with others, and enjoy anytime. Whether it's a family favorite or a new experiment, every great dish starts with the right ingredients and instructions. Take your time, be precise, and let your creativity shine in the kitchen!" id="header_1" />
               
//                 <InputText label="Name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
//                 <InputText label="Description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
//                 <Dropdown id="uom" label="UOM" value={selectedUOM} onChange={setSelectedUOM}/>
//             </Col>
//             {/* <Col size='6'>
//                 <InputText label="Status" id="name" value={name} onChange={(e) => setName(e.target.value)} />
//                 <InputText label="Reason" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
//             </Col> */}
//         </div >
//     );

// }

// export default Form;