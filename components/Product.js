import React from "react";
//import styles from "../styles/Product.module.css";
import IPFSDownload from './IpfsDownload';



// card components
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';





export default function Product({ product }) {
 
  const { id, name, price, description, image_url } = product;
  
  return (
   <>
   <Card sx={{ maxWidth: 345 }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title=""
        subheader="June 17, 2022"
      />
      {/*<CardMedia
        component="img"
        height="194"
        image="/images/card-default.jpg"
        alt="Sell this stuff"
      />*/}
      <img src={image_url} alt={name} />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
          <br />
          Price: {price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <div className="button-container">
          <IPFSDownload filename="emojis.zip" hash="QmWWH69mTL66r3H8P4wUn24t1L5pvdTJGUTKBqT11KCHS5" cta="Download emojis"/>
        </div>    
      </CardActions>
    </Card>
    </>
  );
}