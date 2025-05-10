import { 
  Box,
} from '@mui/material';
import Article from '../stories/Article';
import Sidebar from '../common/Sidebar';


function FeaturedStory() {
   
  return (
    <>
    
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 20,
        }}
      > 
        <Article/>
        <Sidebar />

      </Box>
      
    </>
    
  );
}
export default FeaturedStory