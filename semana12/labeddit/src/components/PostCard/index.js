import React, {useEffect, useState} from 'react';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { PostCardContainer, TitleCard, Interaction, Thumbs, Coments } from "./styled"
import { goToPost } from '../../routes/coordinator';
import { useHistory } from 'react-router';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import AddCommentIcon from '@mui/icons-material/AddComment';
import axios from "axios"
import {BASE_URL} from "../../constants/urls"

const PostCard = (props) => {

  const [contador, setContador] = useState(0)
  const history = useHistory()
 
  const viewDetails = (id) => {
    goToPost(history, id)
  }

  const createPostVote = () =>{
    
    axios.post(`${BASE_URL}/posts/${props.postId}/votes`,{direction: 1}, {
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    } )
    .then((res) =>{
      console.log(res.data)

    })
    .catch((error) =>{
      console.log(error)
    })
  }

  useEffect(()=>{
    createPostVote()
  },[])

  return (
    <PostCardContainer sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            U
          </Avatar>
        }
        title={props.username}
        subheader={props.createdAt}
      />
      <TitleCard onClick={() => viewDetails(props.postId)} variant="h4" gutterBottom component="div">
        {props.title}
      </TitleCard>

      <CardContent>
        <Typography variant="body2" color="neutralColor">
          {props.body}
        </Typography>
      </CardContent>
      <Interaction>
        <Thumbs>
          <ThumbUpAltIcon onClick={createPostVote()}/>
          <p>{props.voteSum}</p>
          <ThumbDownAltIcon />
        
        <Coments>
          <AddCommentIcon onClick={() => viewDetails(props.postId)}/>
        </Coments>
        </Thumbs>


      </Interaction>
    </PostCardContainer>
  );
}

export default PostCard