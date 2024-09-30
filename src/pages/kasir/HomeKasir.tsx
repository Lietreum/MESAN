import React from "react";
import { Grid, Box, Typography } from "@mui/material"; // Import Material-UI components
import CategoryCard from "../../components/user/CategoryCard/CategoryCard"; // Ganti nama komponen
import BannerData from "../../Helpers/HomePageBanner";

const CashierLayout = () => {
  return (
    <Box display="flex" justifyContent="space-between" padding={4}>
      {/* Left Section */}
      <Grid container spacing={2} xs={12} md={8}>
        {BannerData.map((data) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={data.img}>
            <CategoryCard data={data} />
          </Grid>
        ))}
      </Grid>

      {/* Right Section */}
      <Box 
        display="flex" 
        flexDirection="column" 
        justifyContent="space-between" 
        width="30%" // Adjust width to take up the remaining space
        marginLeft={4}
      >
        {/* Top Box - Cashier Food List */}
        <Box 
          bgcolor="white" 
          padding={2} 
          borderRadius={4} 
          boxShadow={2} 
          marginBottom={2}
          minHeight="300px" // Adjust height as needed
        >
          <Typography variant="h6">Item List:</Typography>
          {/* Render list of food items dynamically */}
          <Box display="flex" flexDirection="column">
            <Typography>Lays: 1 x Rp.2000</Typography>
            <Typography>Pilus: 2 x Rp.1000</Typography>
            <Typography>Ale-ale: 4 x Rp.4000</Typography>
            {/* Add more items as needed */}
          </Box>
        </Box>

        {/* Bottom Box - Cashier Input */}
        <Box 
          bgcolor="lightblue" 
          padding={2} 
          borderRadius={4} 
          boxShadow={2}
          minHeight="200px" // Adjust height as needed
        >
          <Typography variant="h6">Payment:</Typography>
          <Box>
            <Typography>Total: Rp. 100,000</Typography>
            <Typography>Tunai: Rp. 0</Typography>
            <Typography>Kembalian: Rp. 0</Typography>
          </Box>
          <Box marginTop={2}>
            <button>Selesai</button> {/* Use button or MUI's Button */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CashierLayout;
