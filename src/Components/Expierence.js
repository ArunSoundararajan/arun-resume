import React from "react";
import {Box,Typography,styled} from "@mui/material"
import Project from "./Project";

const Work=()=>{
    const StyledBox = styled(Box)({
        height: 70,
        width: 700,
        justifyContent:'center'
    })
return(
    <div>
        <Typography letterSpacing={6} sx={{pt:2,px:{xs:3,lg:0}}} variant="h6">WORK EXPERIENCE</Typography>
        <Typography sx={{px:{xs:3,lg:0},fontSize:14,fontWeight:'bold'}}>UI DEVELOPER</Typography>
        <Typography sx={{px:{xs:3,lg:0},fontSize:14}}>Cognizant<br/>2021-2022</Typography>
        <StyledBox sx={{py:2}} >
        <Typography sx={{px:6}}>Have successfully undergone period of 4 months internship in Cognizant</Typography>
        <Typography sx={{px:6,py:1,lineHeight:1.5}}>Have been Worked as Jr.Front End developer for Gilead Technologies under Cognizant for 1 
year</Typography>
        </StyledBox>
        <Project />
    </div>
)
}

export default Work