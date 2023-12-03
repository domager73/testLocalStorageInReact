class DataStorage{
    getByKey(key){
        return localStorage.getItem(key);
    }
    setByKey(key, value){
        return localStorage.setItem(key, value);
    }
    deleteByKey(key){
        return localStorage.removeItem(key);
    }
}

export default DataStorage;