import React from 'react';
import {Typography,styled, Stack} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 3,
    width:100
    
  }));

  const StyledStack=styled(Stack)({
    direction:'column',
  })

const Skill=()=>{
    const StyledText = styled(Typography)({
        fontSize:{xs:10,sm:20,lg:25},
    })
    return(
        <div >
            <StyledText sx={{pt:2,px:9, letterSpacing:6}} variant='h6'>SKILLS</StyledText>
            <StyledStack sx={{px:9}}direction='column'>
                <Typography sx={{pt:1}}>React</Typography>
                <BorderLinearProgress variant="determinate" value={70} />
                <Typography>Javascript</Typography>
                <BorderLinearProgress variant="determinate" value={60} />
                <Typography>Material UI</Typography>
                <BorderLinearProgress variant="determinate" value={70} />
                <Typography>Sharepoint</Typography>
                <BorderLinearProgress variant="determinate" value={78} />
                <Typography>MS Office</Typography>
                <BorderLinearProgress variant="determinate" value={85} />
            </StyledStack>-
            <StyledText variant='h6' sx={{px:9,letterSpacing:6}}>LANGUAGES</StyledText>
            <StyledStack sx={{px:9,pb:2}} direction='column'>
                <Typography  sx={{pt:1}}>English</Typography>
                <BorderLinearProgress variant="determinate" value={100} />
                <Typography>Tamil</Typography>
                <BorderLinearProgress variant="determinate" value={100} />
            </StyledStack>
        </div>

    )

}

export default Skill
