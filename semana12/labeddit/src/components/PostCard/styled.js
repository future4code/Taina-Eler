import styled from 'styled-components'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export const PostCardContainer = styled(Card)`
  width: 450px;
  margin-top: 20px;
`

export const Interaction = styled.div`
 border-top:1px solid grey;
`
export const Thumbs = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 margin:0 5px;
 :hover{
   cursor: pointer;
 }
`
export const Coments = styled.div`
 margin:0 5px;
 width: 50%;
 text-align: end;

`

export const TitleCard = styled(Typography)`
  text-align: center;
  :hover{
    cursor: pointer;
    color: #8B0000;
  }
`
