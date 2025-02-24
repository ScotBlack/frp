// src/components/AgGridComponent.tsx
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ClientSideRowModelModule, ValidationModule } from 'ag-grid-community';

interface AgGridComponentProps {
    rowData: any[];
    columnDefs: any[];
}

const AgGridComponent: React.FC<AgGridComponentProps> = ({ rowData, columnDefs }) => {
    return (
        <div className="ag-theme-balham" style={{ height: "100%", width: "100%" }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                rowHeight={30}
                // fontSize={10}
                modules={[ClientSideRowModelModule, ValidationModule]} // Adding the module
            // Add any other ag-Grid options you need
            />
        </div>
    );
};

export default AgGridComponent;
