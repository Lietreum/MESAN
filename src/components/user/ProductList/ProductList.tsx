  import React from "react";
import Box from "@mui/material/Box";
import Carousel from "../Carousel/Carousel";
import Card from "./SiswaCard";

const ProductList: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      {/* Carousel */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          mb: 0, // Adjusted margin for consistency
        }}
      >
        <Carousel />
      </Box>

      {/* Product Cards */}
      <Box
        sx={{
          width: '100%',
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center',
          mt: 0, // Adjusted margin to ensure proximity to carousel
        }}
      >
        <Card />
      </Box>
    </Box>
  );
};

export default ProductList;
