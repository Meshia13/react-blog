import { Typography, Box } from '@mui/material';
import React, {useState, useEffect} from 'react'
// import story from '../../../../public/stories/MrGoodar.txt'

function FeaturedStory() {
    const [text, setText] = useState('');
    
      useEffect(() => {
        const fetchText = async () => {
          try {
            const response = await fetch( '../../../../public/stories/MrGoodar.txt');
            const data = await response.text();
            setText(data);
            console.log(data)
          } catch (error) {
            console.error('Error fetching text:', error);
          }
        };
    
        fetchText();
      }, []);
    
      return (
        <Box>
          <Typography component="pre" sx={{ whiteSpace: 'pre-wrap' }}>{text}</Typography>
        </Box>
      );
}
export default FeaturedStory