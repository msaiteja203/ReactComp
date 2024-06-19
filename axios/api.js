import axios from "axios";

const url = "https://freetestapi.com/api/v1/products"

export async function Getdata(){
    return await axios.get(url);
}