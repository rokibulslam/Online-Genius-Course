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
import "./Features.css"

const Features = () => {
    return (
        <>
          <main>
            <h1>Count section (Should be remove this line)</h1>
            <div style={{padding:"100px",display:"flex",justifyContent:"space-between",background:"#f9fbfb"}}>
                
<Grid container spacing={2}>

        <Grid item xs={12} sm={6} md={4}>
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

    <Paper className="feature" sx={{ display: 'flex' , justifyContent: 'center',alignItems: 'center',flexDirection: 'column' }}   style={{boxShadow:"5px 5px 23px 0px rgba(0,0,0,0.8)",width:"392px"}}>
        <Typography sx={{textAlign:"center"}}  variant="h3">

            <img style={{padding:16,marginLeft:"25px",height:"90px",width:"90px"}} src={security} alt="" />

<Box style={{textAlign:"center"}}>

                <p style={{fontSize:"24px",fontWeight:"bold"}}>Security Assurance</p>
                <Typography sx={{p:4}} variant="body1">Our template architecture is designed for maximize security and prevent malware, Dos Attack other.</Typography>
</Box>
        </Typography>
    </Paper>
                              
 </Box>

         </Grid>
        <Grid item xs={12} sm={6} md={4}>
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

    <Paper className="feature" sx={{ display: 'flex' , justifyContent: 'center',alignItems: 'center',flexDirection: 'column' }}   style={{boxShadow:"5px 5px 23px 0px rgba(0,0,0,0.8)",width:"392px"}}>
        <Typography sx={{textAlign:"center"}}  variant="h3">

        <img style={{padding:"16px",height:"90px",width:"90px"}} src={support} alt="" />

        <Box style={{textAlign:"center"}}>

                    <p style={{fontSize:"24px",fontWeight:"bold"}}>Best Customer Support</p>
                    <Typography sx={{p:4}} variant="body1">Testing closely, we ship templates. Yet,but anything goes out of track, Support team is there to get it</Typography>
</Box>
        </Typography>
    </Paper>
                              
 </Box>

         </Grid>
        <Grid item xs={12} sm={6} md={4}>
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
    <Paper className="feature" sx={{ display: 'flex' , justifyContent: 'center',alignItems: 'center',flexDirection: 'column' }}   style={{boxShadow:"5px 5px 23px 0px rgba(0,0,0,0.8)",width:"392px"}}>
        <Typography sx={{textAlign:"center"}}  variant="h3">

        <img style={{padding:16,height:"90px",width:"90px"}} src={quality} alt="" />


        <Box style={{textAlign:"center"}}>

                    <p style={{fontSize:"24px",fontWeight:"bold"}}>Great Quality template</p>
                    <Typography sx={{p:4}} variant="body1">We craft powerful templates to keep visitors engaged and maximize store sales extensively.</Typography>
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