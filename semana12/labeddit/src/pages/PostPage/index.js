
import React from "react"
import { useParams } from "react-router-dom"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import {BASE_URL} from "../../constants/urls"

const PostPage = () =>{
    useProtectedPage()
    const params = useParams()
    console.log(params)

    const [postComents , getPosts] = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    console.log(postComents)
    return(
        <div>
            <h1>PostPage</h1>
        </div>
    )
}

export default PostPage