import React from "react";
import { Card, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { CategoryCardProps } from '../../../types/types';

const CategoryCard: React.FC<CategoryCardProps> = ({ data }) => {
  return (
    <Link
      to={`product/type/${data.name.toLowerCase()}`}
      style={{ textDecoration: 'none' }}
      aria-label={`View ${data.name} products`}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "24px", // Adjust the spacing between cards
          padding: "10px", // Add padding for a more refined look
        }}
      >
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: 2,
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            '&:hover': {
              transform: "scale(1.03)", // Subtle hover effect
              boxShadow: 4,
            },
            position: "relative",
            height: 160, // Reduced height for smaller cards
            width: 240,  // Reduced width for smaller cards
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            image={data.img}
            alt={data.name}
            sx={{ height: "100%", objectFit: "cover", width: "100%", borderRadius: 2 }}
            loading="lazy"
          />
        </Card>

        {/* Category Name below the card */}
        <div
          style={{
            marginTop: "12px", // Spacing between the card and the name
            textAlign: "center",
            fontSize: "16px", // Slightly smaller font
            fontWeight: "600", // Bold text for emphasis
            color: "#4A4A4A", // Dark grey for a softer look
          }}
        >
          {data.name}
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
