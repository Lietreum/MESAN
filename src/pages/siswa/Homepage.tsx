import React from "react";
import { Container, Grid, Box } from "@mui/material";
import CategoryCard from "../../components/user/CategoryCard/CategoryCard"; 
import BannerData from "../../Helpers/HomePageBanner";
import AnimatedText from "../../components/AnimatedText";
import WalletCard from "../../components/user/Header/WalletCard";
import Profileholder from "../../assets/admin/images/user/user-01.png";
import SearchBar from "../../components/user/SearchBar/SearchBar";
import Filter from "../../components/user/SearchBar/Filter";

const Homepage: React.FC = () => {
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
          marginBottom: -40,
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

      {/* SearchBar and Filter Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1000px",
          marginBottom: 4,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <SearchBar />
        </Box>
        <Box sx={{ marginLeft: 2 }}>
          <Filter />
        </Box>
      </Box>

      {/* Animated Text Section */}
      <Box
        sx={{
          marginTop: -40,
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
        {BannerData.map((data) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={data.img}>
            <CategoryCard data={data} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Homepage;
