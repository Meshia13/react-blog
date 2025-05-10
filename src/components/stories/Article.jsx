import { 
  Typography, 
  Box,
  Card,
  CardMedia,
  CardContent,
  Avatar,
} from '@mui/material';

function Article() {
   
      return (
        <>
        
          <Box > 

            {/* Article and Title */}
            <Card 
              sx={{
                maxWidth: 350,
                boxShadow: 'none',    
                border: 'none', 
                outline: 'none'
              }}>
              <CardMedia
                component="img"
                alt="case file"
                image="/images/CaseFile.png"
              />
              <figcaption 
                style={{
                  fontStyle: 'italic', 
                  fontSize: '.75rem', 
                  fontWeight: 'bold'
                }}>
                Fig.1 - Case File
              </figcaption>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Who Killed Mr. Goodbar?
                </Typography>
                
              </CardContent>
              <Box 
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  alignItems: 'center',
                  columnGap: 2,
                }}>
                <Box>
                  <Avatar
                    alt="Remy Sharp"
                    src="/images/avatar.png"
                    sx={{ width: 60, height: 60 }}
                  />
                </Box>

                <Box>
                  <Typography variant='h1'  component="div" sx={{textDecoration: 'underline'}}>
                    Carmeshia Lazzana
                  </Typography>
                  <Typography variant='body2'  component="div" sx={{ fontSize: '.75rem' }}>
                    Blue Attic Productions
                  </Typography>
                  <Typography variant='body2'  component="div" sx={{ fontStyle: 'italic' }}>
                    Storyteller
                  </Typography>
                </Box>
              </Box>
            </Card>

            <hr />  

            <Typography variant='h1'sx={{mb: 1}}>Candy Land</Typography>
            <Typography variant='body2' component="div" sx={{mb: 1}}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae optio libero sit dicta. Esse quisquam voluptatem id sunt 
              beatae officia consequatur fuga ad! Doloremque incidunt p erspiciatis magni culpa assumenda libero ut odio hic animi vel, itaque 
              expedita deleniti! Quia quam culpa est doloremque aperiam quo, pariatur rem labore deleniti ea.
            </Typography>

            <Typography variant='h1'sx={{mb: 1}}>Crime Scene</Typography>
            <Typography variant='body2'  component="div" sx={{mb: 1}}>
               The Life Savers paramedics arrived to the scene and described it as a chocolatey nightmare. The driver's door was covered in melted 
               chocolate. Detectives also found green and blue jelly leading away from the scene. Detective Charleston Chew has brought in the 
               Notorious Mike and Ike twins for questioning.
            </Typography>
            
           
            <Typography variant='h1'sx={{mb: 1}}>Suspects</Typography>
            <Typography variant='body2'  component="div" sx={{mb: 1}}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit:
                <ul style={{ paddingLeft: '1.5rem', margin: 0 ,textDecoration: 'underline'}}>
                  <li>KitKat</li>
                  <li>Almond Joy</li>
                  <li>Mike and Ike</li>
                </ul>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae optio libero sit dicta. Esse quisquam voluptatem id sunt 
                beatae officia consequatur fuga ad! Doloremque incidunt p erspiciatis magni culpa assumenda libero ut odio hic animi vel, itaque 
                expedita deleniti! Quia quam culpa est doloremque aperiam quo, pariatur rem labore deleniti ea.
            </Typography>
            
           
          </Box>
        </>
        
      );
}
export default Article