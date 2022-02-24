import axios from 'axios';

const baseUrl ='http://localhost:3001/api/login';

const login = async credentials =>{
    //const {data}=await axios.post(baseUrl,credentials);
    const dat={token:'123'}
    return dat;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {login};