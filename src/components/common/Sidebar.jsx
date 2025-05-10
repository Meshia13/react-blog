import {
    AppBar,
    Box,
    Toolbar,
    Card,
    CardMedia
} from "@mui/material"
import Episode1 from "../podcasts/Episode1"

function Sidebar() {

    return (
        <>

            <Box sx={{ height: '100vh', display: 'flex' }}>
                <AppBar position="static"
                    sx={{
                        width: '500px',
                        height: '100%',
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        border: 'none',
                    }}
                >
                    <Toolbar 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            paddingY: 2,
                            backgroundColor: 'transparent',
                            height: '100%',
                            boxShadow: 'none',
                            border: 'none',
                        }}
                    >       
                        <Episode1 />
                        <Episode1 />
                        
                    </Toolbar>
                </AppBar>
            </Box>

        </>
    )
}

export default Sidebar