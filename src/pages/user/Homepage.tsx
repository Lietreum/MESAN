import React from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Carousel from "../../components/user/Carousel/Carousel";
import CategoryCard from "../../components/user/CategoryCard/CategoryCard";
import BannerData from "../../Helpers/HomePageBanner";
import AnimatedText from "../../components/AnimatedText";

type HomepageProps = {};

const Homepage: React.FC<HomepageProps> = () => {
  return (
    <Container
      maxWidth="xl"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: 0,
        flexDirection: "column",
        marginBottom: 70,
      }}
    >
      {/* Carousel Section */}
      <Box
        padding={0.5}
        style={{
          marginTop: 40, // Margin above the carousel
          marginBottom: 60, // Margin below the carousel
        }}
      >
        <Carousel />
      </Box>

      {/* Animated Text Section */}
      <Box
        style={{
          marginTop: 40, // Margin above the animated text
          marginBottom: 60, // Margin below the text
          textAlign: "center",
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "center", // Center the text horizontally
          alignItems: "center", // Center the text vertically
          margin: "0 auto", // Center horizontally
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
            textAlign: "center", // Ensure text itself is centered
            width: "100%", // Ensures the width is 100% for centering purposes
          }}
        />
      </Box>

      {/* Category Cards Section */}
      <Box
        style={{
          marginTop: 40, // Margin above the category cards
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // Center vertically
          flexWrap: "wrap",
          gap: 20,
          margin: "0 auto", // Center horizontally
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
