import React, { useState } from "react";
import { Card, CardMedia, Typography, Box, Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import { CategoryCardProps } from '../../../types/types';

const CategoryCard: React.FC<CategoryCardProps> = React.memo(({ data }) => {
  const [loading, setLoading] = useState(true); // State to track image loading

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
          mb: 3,
          px: 2,
          textAlign: "center",
          margin: '10px',
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
            height: { xs: 160, sm: 180, md: 200 },
            width: { xs: 220, sm: 240, md: 260 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {loading && (
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              sx={{
                borderRadius: 2,
                position: "absolute",
                zIndex: 1,
              }}
            />
          )}

          <CardMedia
            component="img"
            srcSet={`${data.img}?w=220 220w, ${data.img}?w=240 240w, ${data.img}?w=260 260w`}
            sizes="(max-width: 600px) 220px, (max-width: 900px) 240px, 260px"
            alt={data.name}
            loading="lazy"
            onLoad={() => setLoading(false)} // Hide skeleton once image loads
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              transition: "opacity 0.3s ease-in-out",
              borderRadius: 2,
              opacity: loading ? 0 : 1, // Hide image until it loads
              '&:hover': {
                opacity: 0.9,
              },
            }}
          />
        </Card>

        {/* Category Name below the card */}
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            fontWeight: 600,
            fontSize: { xs: "14px", sm: "16px" },
            color: "#4A4A4A",
          }}
        >
          {data.name}
        </Typography>
      </Box>
    </Link>
  );
});

export default CategoryCard;
