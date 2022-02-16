import React from 'react';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import network from "../../../src/Images/network .png"
import member from "../../../src/Images/employee.png"
import smile from "../../../src/Images/smile.png"
import download from "../../Images/download.png"
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import CountUp from 'react-countup';



// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

const Countup = () => {
    return (
        <>

        <main>
            <div style={{padding:"0 50px",display:"flex",justifyContent:"space-between"}}>
                
<Grid container spacing={2}>
        <Grid item xs={6} md={3}>
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

            <img style={{marginLeft:"25px",height:"60px",width:"60px"}} src={network} alt="" />

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
        <Grid item xs={6} md={3}>
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

        <img style={{height:"60px",width:"60px"}} src={download} alt="" />

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


                <p style={{fontSize:"16px"}}>Amazing Products</p>
</Box>
        </Typography>
    </Paper>
                              
 </Box>

         </Grid>
        <Grid item xs={6} md={3}>
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

        <img style={{height:"60px",width:"60px"}} src={smile} alt="" />


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


                <p style={{fontSize:"16px"}}>Amazing Products</p>
</Box>
        </Typography>
    </Paper>
                              
 </Box>

         </Grid>
        <Grid item xs={6} md={3}>
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

            <img style={{height:"60px",width:"60px"}} src={member} alt="" />
{/*---------------- count up -----------*/}

            <Box >

                <CountUp  start={0} end={100} delay={0} duration={2}>
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


</Grid>

                        
                
            </div>

        </main>
            
        </>
    );
};

export default Countup;