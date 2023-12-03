import React, {useEffect, useState} from 'react';
import DataStorage from "./dataStorage";

const InputPage = () => {
    const storage = new DataStorage();

    const [user, setUser] = useState(storage.getByKey('user'));

    return (
        <div>
            <input type='text' value={user} onChange={(event) =>
                setUser(event.target.value)
            }/>
            <button onClick={() => {
                storage.setByKey('user', user);
            }}>Update data
            </button>
            <button onClick={() => {
                storage.deleteByKey('user');
                setUser('');
            }}>Delete</button>
        </div>
    );
};

export default InputPage;