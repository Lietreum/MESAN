import React from "react";
import { Card, CardMedia, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { CategoryCardProps } from '../../../types/types';

const CategoryCard: React.FC<CategoryCardProps> = ({ data }) => {
  return (
    <Link
      to={`product/type/${data.name.toLowerCase()}`}
      style={{ textDecoration: 'none' }}
      aria-label={`View ${data.name} products`}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mb: 3, // marginBottom (space between cards)
          px: 2, // padding horizontal for consistent spacing
          textAlign: "center",
          margin: '10px', // Tambahkan jarak antar card
        }}
      >
        <Card
          sx={{
            borderRadius: 2,
            boxShadow: 3,
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            '&:hover': {
              transform: "scale(1.05)",
              boxShadow: 6,
            },
            position: "relative",
            height: { xs: 160, sm: 180, md: 200 }, // Responsive height
            width: { xs: 220, sm: 240, md: 260 }, // Responsive width
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden", // Prevent image overflow
          }}
        >
          <CardMedia
            component="img"
            image={data.img}
            alt={data.name}
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              transition: "opacity 0.3s ease-in-out",
              borderRadius: 2,
              '&:hover': {
                opacity: 0.9, // Slight dimming on hover for effect
              },
            }}
            loading="lazy"
          />
        </Card>

        {/* Category Name below the card */}
        <Typography
          variant="body1"
          sx={{
            mt: 2, // marginTop for space between card and text
            fontWeight: 600,
            fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
            color: "#4A4A4A",
          }}
        >
          {data.name}
        </Typography>
      </Box>
    </Link>
  );
};

export default CategoryCard;
