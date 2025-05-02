import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import LandingPage from './components/pages/LandingPage'
import FeaturedStory from "./components/pages/stories/featured";
import { Box } from "@mui/material";
import ResponsiveAppBar from "./components/common/Navbar";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>

<ResponsiveAppBar />
      <Box
          sx={{
            paddingX: "7%",
            position: "relative",
            zIndex: 10,
            backgroundColor: "white",
          }}
          >
          <Header />
      </Box>

      <Box sx={{ paddingX: "1%", paddingTop: "1%" }}>
        <Routes>
          <Route path='/' element={ <LandingPage />} />
          <Route path='' element="" />
          <Route path='' element="" />
          </Routes>
      </Box>
    </BrowserRouter>
    <FeaturedStory />
    
    <Footer />
      
    </>
  )
}

export default App
