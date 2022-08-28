import React from "react";
import {Box,Typography,styled} from "@mui/material"

const Project=()=>{
    const StyledBox = styled(Box)({
        height: 110,
        width: 700,
        justifyContent:'center'
    })
    return(
        <div>
            <Typography sx={{pt:2,px:{xs:3,lg:0}}}letterSpacing={6} variant="h6">EDUCATION</Typography>
            <Typography sx={{px:{xs:3,lg:0},fontSize:14,fontWeight:'bold'}}>PSNA, Anna University</Typography>
            <Typography sx={{px:{xs:3,lg:0},fontSize:14}}>Computer Science Engineer<br/>2017-2021</Typography>
            <StyledBox sx={{pt:2}} >
            <Typography sx={{px:6}}>Have Completed my degree at dindigul with aggregate of 8.01 CGPA</Typography>
            <Typography sx={{px:6,pt:1.5,lineHeight:1.5}}> During that time lead my college web development
             team participated in various hackathon held at tamilnadu also developed a 
             web application using django for college infrastructure maintanence</Typography>
            </StyledBox>
            


        </div>

    )
}

export default Project