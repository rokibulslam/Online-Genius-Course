import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  cardOne from "../../../Images/card-1.jpg"
import "./Card.css"
import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import Rating from '@mui/material/Rating';


const Cardd = () => {
  const [value, setValue] = React.useState(2);

    return (
      <>
      <div >
        <div style={{boxShadow: "-2px 2px 37px 11px rgba(0,0,0,0.5)"}}>
        <Card  className='effect'  sx={{ maxWidth: 352,height:222 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="222"
        image={cardOne}
      />
      {/* <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent> */}
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}



 

    </Card>

    <Box
                      sx={{
                        display: 'flex',
                        // flexWrap: 'wrap',
                        justifyContent: 'flex-start',
                        '& > :not(style)': {
                          m: 1,
                          width: 350,
                          height: 218,
                        },
                      }}
                    >
                    
                      <Paper sx={{border:"none"}}>
                        <Typography style={{fontFamily: "'Open Sans', sans-serif",
                color:"#525252"}} variant="subtitle1">
                        Canlye - Multipurpose React Template
                        </Typography>
                        <Typography>
                          <p style={{fontSize:"13px",color:"#444"}}>By Wpoceans</p>
                        </Typography>


                        {/* <Typography component="legend">Controlled</Typography> */}
                <Box  sx={{ display: 'flex'}}>
                <Rating sx={{mr:3}}
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                ></Rating>
                <p>(05)</p>
                </Box>


                      </Paper>
     
    </Box>

    
  

        </div>
   

   

      </div>
   
   

      </>
    
    );
};

export default Cardd;