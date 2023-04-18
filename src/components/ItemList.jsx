import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ItemList = ({ products }) => {
  return (
    <>
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
            <Link to={`/itemDetail/${prod.id}`}>
            <img
              src={prod.pictureUrl}
              alt="Product Image"
              width="300px"
              height="400px"
              style={{ cursor: "pointer" }}
            />
            </Link>           
            
            <Typography>{prod.title}</Typography>
            <p>{prod.description}</p>
            <Typography fontWeight="bold">${prod.price}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ItemList;
