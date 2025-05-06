import React, { useEffect, useState } from "react";
import { 
    Card, 
    CardContent, 
    CardActions, 
    Button, 
    Typography, 
    CardMedia, 
    Grid, 
    Box
} from "@mui/material";
import {Link} from "react-router-dom";

function ArticleCard() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
          try {
            const res = await fetch("/articles.json");
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            setArticles(data);
          } catch (err) {
            console.error("Failed to load articles:", err);
          }
        };
      
        fetchArticles();
    }, []);

    const featured = articles[0];
    const rest = articles.slice(1);

    return (
        <>

            {/* Featured Card */}
            {featured && (
            
            <Card
                sx={{
                    maxWidth: "80%",
                    margin: "0 auto",
                    mb: 8,
                    mt: 4,
                    display: "flex",
                    flexDirection: "row",
                    boxShadow: 6,
                    overflow: "hidden",
                    
                }}
            >
           
            <Box 
                sx={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    flex: 1, 
                    p: 2 
                }}>

                <CardContent 
                    sx={{ flexGrow: 1,  }}>
                    <Typography variant="h4" component="div" sx={{mb:4}}>
                        {featured.title}
                    </Typography>

                    <Typography variant="body1" color="text.secondary">
                        {featured.description}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Link to='/featured'>
                        <Button size="large" variant="contained" sx={{color: "white"}}>
                            Read More
                        </Button>
                    </Link>
                </CardActions>
            </Box>

            <CardMedia
              component="img"
              image={featured.image}
              alt={featured.title}
              sx={{
                width: '50%',
                height: "100%",
                objectFit: "cover",
              }}/>
            </Card>
            )}

            {/* Rest of the articles */}
            <Grid container spacing={3}>
                {rest.map((article) =>(
                    <Grid size={4} key={article.id} >
                        <Card 
                            sx={{ 
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end",
                                height: "450px",
                                boxShadow: 3,
                                marginBottom: 5,
                                
                            }}>
                            
                            <Box>
                                <CardMedia
                                component="img"
                                height="225"
                                image={article.image}
                                title={article.title}
                                sx={{  objectFit: "fill" }}
                                />
                                
                                <CardContent  
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignContent: "flex-start",
                                        backgroundColor: "transparent",
                                    }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {article.title}
                                    </Typography>

                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {article.description}
                                    </Typography>

                                </CardContent>

                                <CardActions> 
                                    <Button size="small" variant="contained" sx={{color: "white"}}>
                                        Read More
                                    </Button>
                                </CardActions>
                            </Box>
                        </Card>
                    </Grid>
                ))}
               
            </Grid>
        </>
    )

}

export default ArticleCard