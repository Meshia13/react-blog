import { Box, Typography, AppBar, Toolbar, Container } from '@mui/material';


function Footer() {

    return (
        <>

            <AppBar position="static" sx={{textAlign: 'center',}}>
                <Container >
                    <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
                    
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                                display: 'flex',
                                color: 'white',
                                textDecoration: 'none',
                                width: "100%"
                            }}>
                            Carmeshia Lazzana &copy; 2025
                        </Typography>
                        
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    
    )
}

export default Footer