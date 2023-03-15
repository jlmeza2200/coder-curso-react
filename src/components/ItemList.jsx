import React from "react";
import { Box } from "@mui/material";

const ItemList = ({products}) => {
  return (
    <Box
      margin="0 auto"
      display="grid"
      gridTemplateColumns="repeat(auto-fill, 300px)"
      justifyContent="space-around"
      rowGap="20px"
      columnGap="1.33%"
    >
      {products.map((prod) => (
        <Box key={prod.id}>
          <img
            src={prod.pictureUrl}
            alt="Product Image"
            width="300px"
            height="400px"
            style={{ cursor: "pointer" }}
          />
          <h1>{prod.title}</h1>
          <p>{prod.description}</p>
          <p>$ {prod.price}</p>
        </Box>
      ))}
    </Box>
  );
};

export default ItemList;
