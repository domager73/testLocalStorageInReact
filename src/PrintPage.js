import React from 'react';
import dataStorage from "./dataStorage";
import DataStorage from "./dataStorage";

const PrintPage = () => {
    const dataStorage = new DataStorage();

    return (
        <div>
            {dataStorage.getByKey('user')}
        </div>
    );
};

export default PrintPage;