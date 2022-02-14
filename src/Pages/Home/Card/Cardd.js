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
        <div className='parent' sx={{p:60}}  style={{margin:"0 auto",width:"390px",boxShadow: "8px -1px 45px -13px #000000"}}>
        <span className="badge trending">trending</span>

        <div style={{padding:"12px"}}>
          <Card style={{boxShadow:"3px 2px 28px 4px rgba(0,0,0,0.69)"}}  className='effect'  sx={{ maxWidth: 416,height:222 }}>


{/*------------ img section -----------------*/}
      <CardMedia
      component="img"
      alt="green iguana"
      height="222"
      image={cardOne}
      />






</Card>

          </div>
        
 {/*----------------------------- text section------------------ */}
    <Box
                      sx={{
                        display: 'flex',
                        // flexWrap: 'wrap',
                        justifyContent: 'flex-start',
                        '& > :not(style)': {
                          
                          width: 390,
                          height:215,
                          
                          padding:3,
                          borderBox:"auto"
                        },
                      }}
                    >
                    
                      <Paper elevation={0} >
                        <div>
                        <Typography style={{fontWeight:"bold",fontFamily: "'Open Sans', sans-serif",
                color:"#525252",opacity:"0.7"}} variant="subtitle1">
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


                <hr  style={{margin:"28px 0",display:"block",color:"#ecebed",opacity:"0.3"}} ></hr>

  <div style={{display:"flex",justifyContent: 'space-between',marginTop:"3px"}}>
      <div>
      <Typography style={{color:"#242f6c"}} variant="h4">
      $48.00
      </Typography>
        
      </div>
      <Box sx={{ml:5,display:"flex"}}>
      <Button className="btn" style={{border:"1px solid #ecebed"}}><span >Preview</span></Button>

      {/* <FontAwesomeIcon  className="icon" icon={ }></FontAwesomeIcon> */}
      {/* <FontAwesomeIcon icon="faShoping" /> */}
      {/* <i class="fa-solid fa-cart-shopping"></i> */}
     {/* <FontAwesomeIcon icon="faCartShopping"></FontAwesomeIcon> */}
     <FontAwesomeIcon classname="icon" style={{borderRadius:"2px",padding:"6px 13px",marginLeft:"15px"}} className="icon" icon={faShoppingCart}></   FontAwesomeIcon>

    
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