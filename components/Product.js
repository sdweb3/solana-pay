import React from "react";
import Buy from "./Buy";


// card components
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

import onerror from './image/onerror.png'



export default function Product({ product }) {
 
  const { id, name, price, description, image_url } = product;
  
 

  return (
    <div className="card-wrapper">
      <Card sx={{ height: "100%" }} >
     
        <img src={image_url} alt="" width="100%" height="194px" onError={() => this.img.src = onerror} />
      
        <CardContent >
          <Typography variant="body2" color="text.secondary" className="card-text">
            <b>{description}</b>
            <br />
            <b className="gradient-text">Price:  {price} SOL</b>
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <div className="button-container">
            <Buy itemID={id} />
          </div>    
        </CardActions>
      </Card>
  </div>
  );
}