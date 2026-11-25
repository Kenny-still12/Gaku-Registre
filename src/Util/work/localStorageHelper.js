
export default function saveData(key,data){
    
    
    if(typeof key !== "string" || !key?.trim()){
        throw new Error("key should not be null, undefined or empty")
    }
    

    if(data === null){
        throw new Error("data must hold some sorts of value")
    }

    localStorage.setItem(key, JSON.stringify(data));
}

export function loadData(key, defaultValue = []){
    
    if(typeof key !== "string" || !key?.trim()){
        throw new Error("key should not be null, undefined or empty")
    }
    
    const data = localStorage.getItem(key);

    if (data === null){
        return defaultValue;
    }
    // return data ? JSON.parse(data) : defaultValue

    try {
        return JSON.parse(data)
    } catch{
        return defaultValue
    }

}

