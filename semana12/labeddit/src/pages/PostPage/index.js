
import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import {BASE_URL} from "../../constants/urls"
import PostCard from "../../components/PostCard"
import axios from "axios"

const PostPage = () =>{
    useProtectedPage()
    // const [postDetails, setPostDetails] = useState(null)
    const params = useParams()
    console.log(params)
    const history = useHistory()

    const [postComents , getPosts] = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)[0]
    console.log(postComents)
    
    // useEffect(() =>{
    //     if(!params.id){
    //         history.push("/")
    //     }
    // },[])

    // useEffect(() =>{
    //     const axiosConfig = {
    //         headers: {
    //             Authorization: localStorage.getItem("token")
    //         }
    //     }

    //     axios.get(`${BASE_URL}/posts/${params.id}/comments`, axiosConfig)
    //     .then((res) =>{
    //        setPostDetails(res.data)
    //     })
    // },[])
    return(
        <div>
            <PostCard post={postComents}/>
        </div>
    )
}

export default PostPage