import { useEffect, useState } from "react";
import axios from "axios"

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    const getData = () => {
        axios.get(url , {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res) => {
            setData(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(()=>{
        getData()
    },[url])

    return [data, getData]
}

export default useRequestData