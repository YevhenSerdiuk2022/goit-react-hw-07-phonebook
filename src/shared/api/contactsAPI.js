import axios from "axios";

const instance = axios.create({
    baseURL: "https://63bab3c656043ab3c7a213f2.mockapi.io/contacts"
});

export const getContact = async() => {
    const {data} = await instance.get("/");
    return data;
}

export const addContact = async(data) => {
    const {data: result} = await instance.post("/", data);
    return result;
}
 export const removeContact = async (id) => {
    const {data: result} = await instance.delete(`/${id}`);
    return result;
 }