import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import {BASE_URL} from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"
import {ScreenContainer} from "./styled"
import PostCard from "../../components/PostCard/index";
import CreatePost from "../../components/CreatePost/index"

const FeedPage = () => {
    useProtectedPage()
  const [posts, getPosts] = useRequestData([], `${BASE_URL}/posts`)
 
  const postsCards = posts.map((post) => {
    return <PostCard
      key={post.id}
      username={post.username}
      createdAt={post.createdAt}
      title={post.title}
      body={post.body}
      postId={post.id}
      commentCount={post.commentCount}
      userId={post.userId}
      userVote={post.userVote}
      voteSum={post.voteSum}
    />
  })

  return (
    <ScreenContainer>
      <CreatePost getPosts={getPosts}/>
      {postsCards}
    </ScreenContainer>
    
  );
}

export default FeedPage