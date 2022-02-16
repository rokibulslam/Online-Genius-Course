import React from 'react';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import security from "../../../Images/shield.png"
import support from "../../../Images/support.png"
import quality from "../../../Images/gold-medal.png"
import download from "../../../Images/download.png"
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import CountUp from 'react-countup';

const Features = () => {
    return (
        <>
          <main>
            <h1>Count section (Should be remove this line)</h1>
            <div style={{padding:"100px",display:"flex",justifyContent:"space-between",background:"#f9fbfb"}}>
                
<Grid container spacing={2}>

        <Grid item xs={6} md={4}>
                        <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    '& > :not(style)': {
                                    m: 1,
                                    width: 262,
                                    height: 245,
                                    },
                                }}
                                >
  
    <Paper sx={{ display: 'flex' , justifyContent: 'center',alignItems: 'center',flexDirection: 'column' }}   style={{height:"268px",width:"292px"}}>
        <Typography sx={{padding:16,textAlign:"center"}}  variant="h3">

            <img style={{marginLeft:"25px",height:"60px",width:"60px"}} src={security} alt="" />

            <Box >



{/*---------------- count up -----------*/}
                <CountUp  start={2000} end={2025} delay={0} duration={2}>
                            {({ countUpRef }) => (
                                <div style={{display:"flex",alignItems:"center"}}>
                                <span style={{fontWeight:"bold",color:"#242f6c",fontSize:"35px",margin:"0 3px"}} ref={countUpRef}></span>
                                <Typography variant="h3">
                                    +
                                </Typography>
                                </div>
                            )}
                </CountUp>


                <p style={{fontSize:"16px"}}>Amazing Products</p>
</Box>
        </Typography>
    </Paper>
                              
 </Box>

         </Grid>
        <Grid item xs={6} md={4}>
                        <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    '& > :not(style)': {
                                    m: 1,
                                    width: 262,
                                    height: 245,
                                    },
                                }}
                                >
  
    <Paper sx={{ display: 'flex' , justifyContent: 'center',alignItems: 'center',flexDirection: 'column' }}   style={{height:"268px",width:"292px"}}>
        <Typography sx={{padding:16,textAlign:"center"}}  variant="h3">

        <img style={{height:"60px",width:"60px"}} src={support} alt="" />

            <Box >



{/*---------------- count up -----------*/}
                <CountUp  start={630100} end={630168} delay={0} duration={2}>
                            {({ countUpRef }) => (
                                <div style={{display:"flex",alignItems:"center"}}>
                                <span style={{fontWeight:"bold",color:"#242f6c",fontSize:"35px",margin:"0 3px"}} ref={countUpRef}></span>
                                <Typography variant="h3">
                                    +
                                </Typography>
                                </div>
                            )}
                </CountUp>


                <p style={{fontSize:"16px"}}>Total Downloads</p>
</Box>
        </Typography>
    </Paper>
                              
 </Box>

         </Grid>
        <Grid item xs={6} md={4}>
                        <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    '& > :not(style)': {
                                    m: 1,
                                    width: 262,
                                    height: 245,
                                    },
                                }}
                                >
  
    <Paper sx={{ display: 'flex' , justifyContent: 'center',alignItems: 'center',flexDirection: 'column' }}   style={{height:"268px",width:"292px"}}>
        <Typography sx={{padding:16,textAlign:"center"}}  variant="h3">

        <img style={{height:"60px",width:"60px"}} src={quality} alt="" />


            <Box >



{/*---------------- count up -----------*/}
                <CountUp  start={35600} end={35620} delay={0} duration={2}>
                            {({ countUpRef }) => (
                                <div style={{display:"flex",alignItems:"center"}}>
                                <span style={{fontWeight:"bold",color:"#242f6c",fontSize:"35px",margin:"0 3px"}} ref={countUpRef}></span>
                                <Typography variant="h3">
                                    +
                                </Typography>
                                </div>
                            )}
                </CountUp>


                <p style={{fontSize:"16px"}}>Happy Customers</p>
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

export default Features;