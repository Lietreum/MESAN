import React, { useEffect, useState } from 'react';
import { Container, Grid, Box } from "@mui/material";
import CategoryCard from "../../components/user/CategoryCard/CategoryCard"; 
import AnimatedText from "../../components/AnimatedText";
import WalletCard from "../../components/user/Header/WalletCard";
import Profileholder from "../../assets/admin/images/user/user-01.png";
import DefaultImage from '../../assets/data/Kantin_ph.png';
import Filter from '../../components/user/SearchBar/Filter';
import { FaFilter } from 'react-icons/fa';

enum TokoTypes {
  Kantin = 'Kantin',
  Hydro = 'Hydro',
  Koperasi = 'Koperasi',
}

interface Store {
  tokoId: string;
  name: string;
  img?: string | null;
  desc: string;
  tokoType: TokoTypes;
}

const Homepage: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [filter, setFilter] = useState<string>('All');

  useEffect(() => {
    // Fetch data from the correct backend API
    const fetchStores = async (tokoType = 'All') => {
      try {
        const response = await fetch(`https:/api-mesan.curaweda.com/store?tokoType=${tokoType}`); // Corrected the URL with tokoType query param
        const data = await response.json();
        setStores(data); // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching store data:', error);
      }
    };
  
    fetchStores(filter);
  }, [filter]); // Refetch stores when selectedType changes

  return (
    <Container
      maxWidth="xl"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px",
        marginBottom: 70,
      }}
    >
      {/* Wallet Section */}
      <Box
        sx={{
          marginTop: 2,
          marginBottom: 4,
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
          marginBottom: 2,
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
            fontSize: "32px", // Adjusted font size for responsiveness
            lineHeight: 1.2,
            textAlign: "center",
            width: "100%",
            color: "#000",
          }}
        />
      </Box>

      {/* Filter Section */}
      <Box
        sx={{
          width: "100%", // Take up full width
          display: "flex",
          justifyContent: "flex-start", // Align to far left
          alignItems: "center",
          marginLeft: "16px", // Adjusted margin for smaller screens
          marginBottom: 2,  // Add space between filter and store cards
        }}
      >
        <FaFilter className="text-lg" />
        <Filter setFilter={setFilter} />
      </Box>

      {/* Store Cards Section */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {stores.map((store) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={store.tokoId}>
            <CategoryCard data={{ ...store, img: store.img || DefaultImage }} /> 
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Homepage;
