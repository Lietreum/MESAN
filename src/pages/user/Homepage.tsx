import React from "react";
import { Container, Box } from "@mui/material";
import Carousel from "../../components/user/SalesBanner/Carousel";
import CategoryCard from "../../components/user/CategoryCard/CategoryCard";
import SearchBar from "../../components/user/SearchBar/SearchBar";
import BannerData from "../../Helpers/HomePageBanner";
import AnimatedText from "../../components/AnimatedText";

type HomepageProps = {};

const Homepage: React.FC<HomepageProps> = () => {
  return (
    <Container
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
        <Carousel />
      </Box>
      
      {/* Search Bar Section */}
      <Box
        style={{
          marginTop: 40,
          width: "100%",
          maxWidth: "800px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SearchBar/>
      </Box>
      
      {/* Animated Text Section */}
      <Box
        style={{
          marginTop: 40,
          textAlign: "center",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <AnimatedText
          text="Select Stores"
          variant="h3"
          loopCount={2}
          style={{
            fontWeight: "bold",
            fontSize: "48px",
            marginTop: 20,
            lineHeight: 1.2,
          }}
        />
      </Box>
      
      {/* Category Cards Section */}
      <Box
        style={{
          marginTop: 60,
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {BannerData.map((data) => (
          <CategoryCard data={data} key={data.img} />
        ))}
      </Box>
    </Container>
  );
};

export default Homepage;
