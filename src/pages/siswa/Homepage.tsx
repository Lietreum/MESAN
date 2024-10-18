import React, { useEffect, useState } from 'react';
import { Container, Grid, Box } from "@mui/material";
import CategoryCard from "../../components/user/CategoryCard/CategoryCard"; 
import AnimatedText from "../../components/AnimatedText";
import WalletCard from "../../components/user/Header/WalletCard";
import Profileholder from "../../assets/admin/images/user/user-01.png"

enum TokoTypes {
  Kantin = 'Kantin',
  Hydro = 'Hydro',
  Koperasi = 'Koperasi',
}

interface Store {
  tokoId: string;
  name: string;
  img: string;
  desc: string;
  tokoType: TokoTypes;
}

const Homepage: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    // Fetch data from the backend API
    const fetchStores = async () => {
      try {
        const response = await fetch('http://localhost:3001/store/');
        const data = await response.json();
        setStores(data); // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching store data:', error);
      }
    };

    fetchStores();
  }, []); // Empty dependency array means this will run once when the component mounts

  return (
    <Container
      maxWidth="xl"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 16px",
        marginBottom: 70,
      }}
    >
      {/* Wallet Section */}
      <Box
        sx={{
          marginTop: 2,
          marginBottom: 6,
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: "1000px" }}>
          <WalletCard
            balance={10000}
            profileName="Thomas Anree"
            profileImage={Profileholder}
          />
        </Box>
      </Box>

      {/* Animated Text Section */}
      <Box
        sx={{
          marginTop: 4,
          marginBottom: 6,
          textAlign: "center",
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AnimatedText
          text="Select Stores"
          variant="h3"
          loopCount={2}
          style={{
            fontWeight: "bold",
            fontSize: "48px",
            lineHeight: 1.2,
            textAlign: "center",
            width: "100%",
            color: "#000",
          }}
          
        />
        
      </Box>

      {/* Store Cards Section */}
      <Grid
      container
      spacing={4}
      justifyContent="center"
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {stores.map((store) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={store.tokoId}>
          <CategoryCard data={store} /> 
        </Grid>
      ))}
    </Grid>
    </Container>
  );
};

export default Homepage;
