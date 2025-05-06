import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeaturedStory from "./components/pages/featured";
import Footer from "./components/common/Footer";
import { Box } from "@mui/material";
import ResponsiveAppBar from "./components/common/Navbar";
import HomePage from "./components/pages/HomePage";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>  
      {/* <Box sx={{ backgroundColor: 'primary.main' }}> */}
      <BrowserRouter>
    

        <ResponsiveAppBar />
        
        <Box
            // sx={{
            //   paddingX: "7%",
            //   position: "relative",
            //   zIndex: 10,
            //   backgroundColor: "white",
              
              
            // }}
            >
           
        </Box>

        {/* <Box sx={{ paddingX: "1%", paddingTop: "1%" }}> */}
        <Box >
          <Routes>
            <Route path='/' element={ <HomePage />} />
            <Route path='/featured' element={ <FeaturedStory />} />
            <Route path='' element="" />
            </Routes>
        </Box>
        
      </BrowserRouter>
      {/* <FeaturedStory /> */}
      
      <Footer />
      {/* </Box> */}
        
    </>
  )
}

export default App
