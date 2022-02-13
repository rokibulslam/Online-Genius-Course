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
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Cardd = () => {
  const [value, setValue] = React.useState(2);

    return (
      <>
      <main>
        <div sx={{p:60}}  style={{margin:"0 auto",width:"358px",boxShadow: "3px 2px 28px 4px rgba(0,0,0,0.33)"}}>
        <Card style={{marginBottom:"5px",boxShadow:"3px 2px 28px 4px rgba(0,0,0,0.69)"}}  className='effect'  sx={{ maxWidth: 352,height:222 }}>


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
                          width: 358,
                          height:215,
                          
                          padding:2,
                          borderBox:"auto"
                        },
                      }}
                    >
                    
                      <Paper elevation={0} >
                        <div>
                        <Typography style={{fontFamily: "'Open Sans', sans-serif",
                color:"#525252"}} variant="subtitle1">
                        Canlye - Multipurpose React Template
                        </Typography>
                        <Typography>
                          <p style={{fontSize:"13px",color:"#444"}}>By Wpoceans</p>
                        </Typography>

                        </div>
                       

                        {/* <Typography component="legend">Controlled</Typography> */}
                <Box  sx={{ display: 'flex'}}>
                <Rating sx={{mr:3}}
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                ></Rating>
                <Typography>(05)</Typography>
                </Box>


                <hr  style={{margin:"28px 0",display:"block",color:"#ecebed"}} ></hr>

  <div style={{display:"flex",marginTop:"3px"}}>
      <div>
      <Typography variant="h4">
      $48.00
      </Typography>
        
      </div>
      <Box sx={{ml:5}}>
      <Button className="btn" style={{border:"1px solid #ecebed"}}><span >Preview</span></Button>

      {/* <FontAwesomeIcon  className="icon" icon={ }></FontAwesomeIcon> */}
      {/* <FontAwesomeIcon icon="faShoping" /> */}
      {/* <i class="fa-solid fa-cart-shopping"></i> */}
     <FontAwesomeIcon icon="faCartShopping"></FontAwesomeIcon>
     <FontAwesomeIcon  className="icon" icon={faShoppingCart}></FontAwesomeIcon>
      </Box>
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