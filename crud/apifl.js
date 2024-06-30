import axios from "axios";

const url = "https://freetestapi.com/api/v1/products";

export async function Getdata(){
    return await axios.get(url);
}

export async function Deldata(id){
    return await axios.delete(`${url}/${id}`);
}

export async function Postdata(data){
    return await axios.post(url, data, {
        headers:{
            'Content-Type' : 'application/json'
        }
    });
}