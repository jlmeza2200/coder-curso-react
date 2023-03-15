import React, { useEffect, useState } from "react";
// import ItemCount from "./ItemCount";
import { Box } from "@mui/material";
import ItemList from "./ItemList";
import getProducts from "../services/handlePromise";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => alert("Hay un problema...", err));
  }, []);

  return (
    <Box padding="200px 200px">
      {/* <ItemCount stock={5} initial={1}/> */}
      <ItemList products={products} />
    </Box>
  );
};

export default ItemListContainer;
