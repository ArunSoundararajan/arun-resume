import React from "react";
import Arun from '../Assets/Arun.jpg'
import {Grid,Avatar,Typography,Box,styled} from '@mui/material';
import {ImLocation2} from 'react-icons/im'
import {IoCall} from 'react-icons/io5'
import {CgMail} from 'react-icons/cg'
import Skill from "./Skills";
import Work from "./Expierence";


const Profile=()=>{
    const StyledBox = styled(Box)({
        height: 70,
        width: 750,
        justifyContent:'center'
    })
return(
    <Grid container  direction={"row"}>
       <Grid item lg={4} >
        <Box sx={{pt:2,px:{xs:10,sm:8,md:10,lg:10}}}>
      <Avatar
        alt="Remy Sharp"
        src={Arun}
        
        sx={{ width: 100, height: 100 }}
      />
      </Box>
      <Typography  variant="h6" sx={{px:9,pt:1,fontSize:{xs:16,sm:18,lg:16},fontWeight:'bold'}}>Date of Birth</Typography>
      <Typography  variant="h6" sx={{px:9,fontSize:{xs:16,sm:18,lg:16}}}>30.04.2000</Typography>
      <Typography letterSpacing={6} variant='h6'sx={{px:9,pt:2}}>CONTACT DETAILS</Typography>
      
      <Typography  lineHeight={2} variant="h6" sx={{px:9,fontSize:{xs:16,sm:18,lg:16}}}><IoCall size={18}/>   6383055031</Typography>  
      <Typography  lineHeight={1} variant="h6" sx={{px:9,fontSize:{xs:16,sm:18,lg:15}}}><CgMail size={20}/>   arunsoundararajan4053@gmail.com</Typography>  
      <Typography lineHeight={2}  variant="h6"sx={{pt:1,px:9,fontSize:{xs:16,sm:18,lg:16}}}><ImLocation2 size={18}/>   Dindigul</Typography>
      <Skill/>

      </Grid>
      <Grid item lg={6} >
      <Typography sx={{pt:2,px:{xs:3,lg:0},fontSize:{xs:20,sm:22,lg:24}}} >Arun Soundararajan</Typography>
      <Typography letterSpacing={8} sx={{px:{xs:3,lg:0},fontSize:{xs:12,sm:14,lg:16}}} >WEBDEVELOPER</Typography>
      <StyledBox>
      <Typography lineHeight={2} sx={{pt:2,px:{xs:3,lg:0},fontSize:{xs:14,sm:16,lg:16}}}> I am a qualified and professional web developer with a expierence of one year in front end development 
      further will provide solutions to a company with 
innovative ideas and work with passion, professionalism and integrity to register myself as a successful 
employee in the long run. Team player with an eye for detail</Typography>
<Typography > <Work/></Typography>
      </StyledBox>
     
      </Grid>
    
    </Grid>
)
}

export default Profile
