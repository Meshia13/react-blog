import React from "react"
import { Box, Typography } from "@mui/material"
import cover from "../../assets/images/PaperAndQuill.png"


function LandingPage () {
    return (

        <Box 
            sx={{
                backgroundImage: `url(${cover})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '385px'
            }}
        >
            {/* <Typography variant="h4">Shorts:</Typography>
            <Typography variant="h5">Original Stories</Typography> */}
        </Box>
        

    )

}

export default LandingPage