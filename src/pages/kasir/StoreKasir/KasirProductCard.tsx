import React from "react";
import { Card, CardMedia, Typography } from "@mui/material";

interface ProductCardProps {
  data: {
    id: number;
    title: string;
    price: number;
    imgUrl: string;
    tokoName: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <CardMedia
        component="img"
        src={data.imgUrl}
        alt={data.title}
        sx={{
          height: 150,
          width: "100%",
          objectFit: "cover",
          borderRadius: 2,
        }}
      />
      <Typography variant="h6" sx={{ mt: 1 }}>
        {data.title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {data.tokoName}
      </Typography>
      <Typography variant="h6" color="primary">
        ${data.price.toFixed(2)}
      </Typography>
    </Card>
  );
};

export default ProductCard;
