/*eslint-disable*/
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {  Routes , Route , Link, useNavigate} from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();
  const id = props.it.id ; 
 

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const moveDetail = ()=>{
    

    navigate(`/detail?id=${id}`);
  };

  return (
    <Card  style={{backgroundColor : "gray", borderRadius : "20px", margin: "50px", width : "330px" , cursor : "pointer"}} sx={{ maxWidth: 400 }} >
      <CardHeader style={{color : "white"}}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            NSM
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title= {props.it.title}
        
      />
      <CardMedia style={{color : "white"}} onClick ={moveDetail}
        component="img"
        height="300"
        image= {props.it.imgPath}
        alt="사진제목"
      />
      <CardContent>
        <Typography style={{color: "white"}} variant="body2" color="text.secondary">
          {props.it.location}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton style = {{color : "white"}} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <ExpandMore style = {{color : "white"}}
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{color: "white"}}>
          <Typography paragraph>{props.it.method}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}