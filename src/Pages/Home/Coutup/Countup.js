import React from 'react';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import network from "../../../Images/network .png"
import member from "../../../Images/employee.png"
import smile from "../../../Images/smile.png"
import download from "../../../Images/download.png"
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import "./Countup.css"

const Countup = () => {
    return (
        <>

        <main>
            <h1>Count section (Should be remove this line)</h1>
            <div className="number" style={{display:"flex",justifyContent:"space-between",background:"#f9fbfb"}}>
                
<Grid className="alignment" container spacing={2}>

        <Grid item   xs={12} sm={6}  lg={3}>
                        <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    '& > :not(style)': {
                                    m: 1,
                                    width: 262,
                                    height: 245,
                                    gap:2
                                    },
                                }}
                                >
  
    <Paper sx={{ display: 'flex' , justifyContent: 'center',alignItems: 'center',flexDirection: 'column' }}   style={{height:"268px",width:"292px"}}>
        <Typography sx={{padding:16,textAlign:"center"}}  variant="h3">

            <img style={{marginLeft:"25px",height:"60px",width:"60px"}} src={network} alt="" />

            <Box >



{/*---------------- count up -----------*/}
                {/* <CountUp redraw={true}  start={2000} end={2025} delay={0} duration={2}>
                            {({ countUpRef }) => (
                                <div style={{display:"flex",alignItems:"center"}}>
                                <span style={{fontWeight:"bold",color:"#242f6c",fontSize:"35px",margin:"0 3px"}} ref={countUpRef}></span>
                                <Typography variant="h3">
                                    +
                                </Typography>
                                </div>
                            )}
                </CountUp> */}
    <CountUp start={2000} end={2025} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <div style={{display:"flex",alignItems:"center"}}>
                                <span style={{fontWeight:"bold",color:"#242f6c",fontSize:"35px",margin:"0 3px"}} ref={countUpRef}></span>
                                <Typography variant="h3">
                                    +
                                </Typography>
                                </div>
            </VisibilitySensor>
        )}
    </CountUp>


                <p style={{fontSize:"16px"}}>Amazing Products</p>
</Box>
        </Typography>
    </Paper>
                              
 </Box>

         </Grid>
        <Grid item  xs={12} sm={6}  lg={3}>
                        <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    '& > :not(style)': {
                                    m: 1,
                                    width: 262,
                                    height: 245,
                                    gap:2
                                    },
                                }}
                                >
  
    <Paper sx={{ display: 'flex' , justifyContent: 'center',alignItems: 'center',flexDirection: 'column' }}   style={{height:"268px",width:"292px"}}>
        <Typography sx={{padding:16,textAlign:"center"}}  variant="h3">

        <img style={{height:"60px",width:"60px"}} src={download} alt="" />

            <Box >



{/*---------------- count up -----------*/}
<CountUp start={2000} end={2025} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <div style={{display:"flex",alignItems:"center"}}>
                                <span style={{fontWeight:"bold",color:"#242f6c",fontSize:"35px",margin:"0 3px"}} ref={countUpRef}></span>
                                <Typography variant="h3">
                                    +
                                </Typography>
                                </div>
            </VisibilitySensor>
        )}
    </CountUp>


                <p style={{fontSize:"16px"}}>Total Downloads</p>
</Box>
        </Typography>
    </Paper>
                              
 </Box>

         </Grid>
        <Grid item  xs={12} sm={6}  lg={3}>
                        <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    '& > :not(style)': {
                                    m: 1,
                                    width: 262,
                                    height: 245,
                                    gap:2
                                    },
                                }}
                                >
  
    <Paper sx={{ display: 'flex' , justifyContent: 'center',alignItems: 'center',flexDirection: 'column' }}   style={{height:"268px",width:"292px"}}>
        <Typography sx={{padding:16,textAlign:"center"}}  variant="h3">

        <img style={{height:"60px",width:"60px"}} src={smile} alt="" />


            <Box >



{/*---------------- count up -----------*/}
<CountUp start={2000} end={2025} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <div style={{display:"flex",alignItems:"center"}}>
                                <span style={{fontWeight:"bold",color:"#242f6c",fontSize:"35px",margin:"0 3px"}} ref={countUpRef}></span>
                                <Typography variant="h3">
                                    +
                                </Typography>
                                </div>
            </VisibilitySensor>
        )}
    </CountUp>


                <p style={{fontSize:"16px"}}>Happy Customers</p>
</Box>
        </Typography>
    </Paper>
                              
 </Box>

         </Grid>
        <Grid item  xs={12} sm={6}  lg={3}>
                        <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    '& > :not(style)': {
                                    m: 1,
                                    width: 262,
                                    height: 245,
                                    gap:2
                                    },
                                }}
                                >
  
    <Paper sx={{ display: 'flex' , justifyContent: 'center',alignItems: 'center',flexDirection: 'column' }}   style={{height:"268px",width:"292px"}}>
        <Typography sx={{padding:16,textAlign:"center"}}  variant="h3">

            <img style={{height:"60px",width:"60px"}} src={member} alt="" />
{/*---------------- count up -----------*/}

            <Box >

            <CountUp start={2000} end={2025} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <div style={{display:"flex",alignItems:"center"}}>
                                <span style={{fontWeight:"bold",color:"#242f6c",fontSize:"35px",margin:"0 3px"}} ref={countUpRef}></span>
                                <Typography variant="h3">
                                    +
                                </Typography>
                                </div>
            </VisibilitySensor>
        )}
    </CountUp>


                <p style={{fontSize:"16px"}}>Team Members</p>
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