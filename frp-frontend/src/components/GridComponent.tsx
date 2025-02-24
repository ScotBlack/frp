// src/components/DataGrid.tsx
import React, { useEffect, useState } from 'react';
import AgGrid from './AgGrid';

interface RowData {
    make: string;
    model: string;
    price: number;
}

const DataGrid: React.FC = () => {
    // State to store fetched data
    const [rowData, setRowData] = useState<RowData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Column definitions for the grid
    const columnDefs = [
        { headerName: 'Name', field: 'title' },
        { headerName: 'Username', field: 'completed' },
        { headerName: 'Email', field: 'email' },
        { headerName: 'Phone', field: 'phone' }
    ];


    useEffect(() => {

        const fetchData = async () => {
            try {
                // Replace with your actual data fetching logic
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const data = await response.json();
                setRowData(data);

            } catch (error) {
                setError('Failed to load data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div style={{
            height: "500px", width: "1200px"
        }}>
            <h2>User data</h2>
            <AgGrid rowData={rowData} columnDefs={columnDefs} />
        </div >
    );
};

export default DataGrid;
