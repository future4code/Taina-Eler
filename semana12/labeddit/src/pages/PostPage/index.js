import { Button } from "@material-ui/core"
import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"

const PostPage = () =>{
    useProtectedPage()
    return(
        <div>
            <h1>PostPage</h1>
            <Button variant="contained" color="primary">
                Primary
            </Button>
        </div>
    )
}

export default PostPage