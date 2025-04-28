import { Box, Typography } from '@mui/material';

function Footer() {

    return (
        <>
            <Box component="footer" sx={{ p: 2, textAlign: 'center', backgroundColor: 'primary.main', color: 'white' }}>
                <Typography variant="body2">
                    Carmeshia Lazzana &copy; 2025
                </Typography>
            </Box>
        </>
    
    )
}

export default Footer