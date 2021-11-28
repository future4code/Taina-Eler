import axios from "axios"
import {BASE_URL} from "../constants/urls"


export const createContent = (body, clear,  getNewPosts) => {
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => {
        localStorage.getItem("token", res.data.token)
        clear()
        getNewPosts()
    })
    .catch((error) =>{
        alert(error.response.data.message)
    })
}
