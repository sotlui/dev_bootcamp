import axios from 'axios';

const baseUrl ='https://jsonplaceholder.typicode.com/posts';

// eslint-disable-next-line no-unused-vars
let token=null;

const setToken=newToken=>{
    token= `Bearer ${newToken}`
}

const getAll =()=>{
    const request = axios.get(baseUrl);
    return request.then(response=>response.data);
}

const create=(newObject) =>{
    const config={
        headers:{
            Autorization:token
        }
    }
    //const request = axios.post(baseUrl,newObject, config );
    const request = axios.post(baseUrl,newObject );
    return request.then(response=>response.data);
}

const update =(id, newObject)=>{
    const config={
        headers:{
            Autorization:token
        }
    }
    const request=axios.put(`${baseUrl}/${id}`, newObject, config);
    return request.then(response=>response.data);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll, create, update, setToken}