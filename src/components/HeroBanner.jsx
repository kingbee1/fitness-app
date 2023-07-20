import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImg from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight='700' sx={{
        fontSize: {lg:'44px', xs: '36px'}
      }} 
      mb='20px'mt='30px'
      >
        Sore now,
        <br /> strong later.
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={4} >
      Make yourself stronger than,
        <br />  your excuses...
      </Typography>
      <Button variant='contained' color='error' href="#exercises" sx={{
        backgroundColor: '#ff2526'
      }}>Explore Exercises</Button>
      <Typography 
      fontWeight={600}
      color='#ff2526'
      sx={{
        opacity:0.1, display : {lg: 'block', xs: 'none'}
      }}
      fontSize='200px'
      >
        Execise
      </Typography>
      {/* <img src={HeroBannerImg} alt="banner" className="hero-banner-img" /> */}
    </Box>
  );
};

export default HeroBanner;
