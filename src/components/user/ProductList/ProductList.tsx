import React from 'react';
import Box from '@mui/material/Box';
import Carousel from '../Carousel/Carousel' 
import data from '../../../Helpers/HomePageBanner';
// import AnimatedText from './AnimatedText';

const ProductList: React.FC = () => {
  return (
    <Box
      maxWidth="xl"
      style={{
        padding: "0 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 70,
      }}
    >
      {/* Carousel Section */}
      <Box
        padding={2}
        style={{ width: "100%", maxWidth: "1200px", marginTop: 60 }}
      >
        <Carousel/>
      </Box>
      

      
    </Box>
  );
};

export default ProductList;
