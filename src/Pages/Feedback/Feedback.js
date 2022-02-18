import React from 'react';
import Paper from '@mui/material/Paper';
import { borderRadius, Box } from '@mui/system';
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import c_one from "../../../src/Images/client_1.jfif"
import c_two from "../../../src/Images/client2.jfif"
import "./Feedback.css"
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import CountUp from 'react-countup';

const Feedback = () => {
    return (
        <>
          <main>
            <h1>Count section (Should be remove this line)</h1>
            <div style={{padding:"100px",display:"flex",justifyContent:"space-between",flexDirection:"column"}}>
                <div style={{marginBottom:"60px"}}>
                <h1 style={{color:"#242f6c"}}>What People Say</h1>
                <p style={{color:"#9c8a78"}}>Build and Earn with your online store with lots of cool and exclusive features bundled with Edefy!</p>
                <p style={{color:"#9c8a78"}}> features bundled with Edefy!</p>

                </div>
                
<Grid container spacing={2}>

        <Grid className="space"  item xs={12} sm={6} md={4}>
                        <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    '& > :not(style)': {
                                    m: 1,
                                    width: 262,
                                   
                                    },
                                }}
                                >
    {/*------------------------ card 1 ---------------------*/}

    <Paper className="feedback" sx={{ display: 'flex' , justifyContent: 'center',alignItems: 'center',flexDirection: 'column' }}   style={{borderRadius:"5px",boxShadow:"5px 5px 23px 0px rgba(0,0,0,0.8)",width:"480px"}}>
        <Typography sx={{textAlign:"center"}}  variant="h3">

        <div className='parents_img' style={{textAlign:"center",height:"93px",width:"93px"}}>
        <img className='IMAGE_RADIUS' style={{borderRadius:"50%",height:"75px",width:"75px"}} src={c_one} alt="" />
        </div>

<Box style={{lineHeight:"0.1px"}}>

                <p style={{fontSize:"24px",fontWeight:"bold"}}>Henry Jimac</p>
                <p style={{fontSize:"13px",fontWeight:"bold"}}>Head of  Mahrs</p>
                <Typography sx={{p:5}} variant="body1">Edefy template dolor sit amet, consectetur adipiscing elit, beautiful sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Typography>
</Box>
        </Typography>
    </Paper>
                              
 </Box>

         </Grid>
        <Grid className="spacing"   item  xs={12} sm={6} md={4}>
                        <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    '& > :not(style)': {
                                    m: 1,
                                    width: 262,
                                   
                                    },
                                }}
                                >
    {/*------------------------ card 2 ---------------------*/}

    <Paper className="feedback" sx={{ display: 'flex' , justifyContent: 'center',alignItems: 'center',flexDirection: 'column' }}   style={{borderRadius:"5px",backgroundColor:"#eaf7f7",boxShadow:"5px 5px 23px 0px rgba(0,0,0,0.8)",width:"480px",borderBottom:"6px solid #00bfd6"}}>
        <Typography sx={{textAlign:"center"}}  variant="h3">

        <div className='parents_img' style={{textAlign:"center",height:"93px",width:"93px"}}>
        <img className='IMAGE_RADIUS' style={{borderRadius:"50%",height:"75px",width:"75px"}} src={c_one} alt="" />
        </div>

        <Box style={{lineHeight:"0.1px"}}>

                <p style={{fontSize:"24px",fontWeight:"bold"}}>Merry Jimac</p>
                <p style={{fontSize:"13px",fontWeight:"bold"}}>Head of  Mahrs</p>
                <Typography sx={{p:5}} variant="body1">Edefy template dolor sit amet, consectetur adipiscing elit, beautiful sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Typography>
</Box>
        </Typography>
    </Paper>
                              
 </Box>

         </Grid>
        <Grid className="spacing"   item  xs={12} sm={6} md={4}>
                        <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    '& > :not(style)': {
                                    m: 1,
                                    width: 262,
                                    },
                                }}
                                >
  {/*------------------------ card 3 ---------------------*/}
    <Paper className="feedback" sx={{ display: 'flex' , justifyContent: 'center',alignItems: 'center',flexDirection: 'column' }}   style={{borderRadius:"5px",boxShadow:"5px 5px 23px 0px rgba(0,0,0,0.8)",width:"480px"}}>
        <Typography sx={{textAlign:"center"}}  variant="h3">

        <div className='parents_img' style={{textAlign:"center",height:"93px",width:"93px"}}>
        <img className='IMAGE_RADIUS' style={{borderRadius:"50%",height:"75px",width:"75px"}} src={c_two} alt="" />
        </div>


        <Box style={{lineHeight:"0.1px"}}>

<p style={{fontSize:"24px",fontWeight:"bold"}}>Robert Downy</p>
<p style={{fontSize:"13px",fontWeight:"bold"}}>CEO  Mahrs</p>
<Typography sx={{p:5}} variant="body1">Edefy template dolor sit amet, consectetur adipiscing elit, beautiful sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Typography>
</Box>
        </Typography>
    </Paper>
                              
 </Box>

         </Grid>
       


</Grid>

                        
                
            </div>

        </main>
            
        </>
    );
};

export default Feedback;