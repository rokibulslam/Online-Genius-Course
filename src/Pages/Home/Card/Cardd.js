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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Cardd = () => {
  const [value, setValue] = React.useState(2);

    return (
      <>
      <main>
        <div sx={{p:60}}  style={{margin:"0 auto",width:"352px",boxShadow: "-2px 2px 37px 11px rgba(0,0,0,0.5)"}}>
        <Card  className='effect'  sx={{ maxWidth: 352,height:222 }}>


          {/*------------ img section -----------------*/}
      <CardMedia
        component="img"
        alt="green iguana"
        height="222"
        image={cardOne}
      />
      



 

    </Card>
 {/*----------------------------- text section------------------ */}
    <Box
                      sx={{
                        display: 'flex',
                        // flexWrap: 'wrap',
                        justifyContent: 'flex-start',
                        '& > :not(style)': {
                          m: 1,
                          width: 350,
                          height: 218,
                          padding:2
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



                <div>
      <div>
        
      </div>
      <div>
      <Button  style={{backgroundColor:"linear-gradient(107deg, rgba(0,218,215,1) 32%, rgba(0,176,213,1) 59%)"}} sx={{ border: 1 }}>Preview</Button>

      <FontAwesomeIcon  className="icon" icon={faCoffee}></FontAwesomeIcon>

      {/* <i class="fa-solid fa-cart-shopping"></i> */}

      </div>
    </div>


                      </Paper>
     
    </Box>

  

    
  

        </div>
   

   
        <i style={{color:"#0000"}} className="fa-light fa-cart-shopping"></i>
        
      </main>
   
   

      </>
    
    );
};

export default Cardd;