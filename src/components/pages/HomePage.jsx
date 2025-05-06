import React from "react"
import Header from "../common/Header"
import ArticleCard from "../common/ArticleCard"
import Footer from "../common/Footer"
import { Box } from "@mui/material"

function HomePage() {

    return (
        <>
         <Box
             sx={{
                paddingX: "7%",
                position: "relative",
                zIndex: 10,
                backgroundColor: "white",
            }}>
           <Header/>
            <ArticleCard/>
           
        </Box>
        
        </>
    )

}

export default HomePage