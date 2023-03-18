import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import ItemDetail from "./ItemDetail";
import getProducts from "../services/handlePromise";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  
  useEffect(() => {
    getProducts
    .then((res) => {
      setItem(res[0]); // Resolve one Product of object array
      })
      .catch((err) => alert("Hay un error", err));
  }, []);

  return (
    <Box>
      <ItemDetail item={item} />
    </Box>
  );
};

export default ItemDetailContainer;
