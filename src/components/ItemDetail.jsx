import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { useParams } from "react-router-dom";
import getProducts from "../services/handlePromise";
// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//React Router
import { Link } from "react-router-dom";
import Cart from "../pages/Cart";

const ItemDetail = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(1);

  const addCountHandler = () => {
    setCount(count + 1);
  };

  const DecCountHandler = () => {
    count > 1 && setCount(count - 1);
  };

  const showAddedItem = () => {
    count > 1
      ? toast(`Se agregaron ${count} productos al carrito`)
      : toast(`Se agregó ${count} producto al carrito`);
  };

  useEffect(() => {
    getProducts
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => alert("Hay un problema...", err));
  }, []);

  const { productId } = useParams();
  const productSelected = products.find((prod) => prod.id === productId);

  return (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* IMAGES */}
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={productSelected?.pictureUrl}
            width="100%"
            height="70%"
            src={productSelected?.pictureUrl}
            style={{ objectFit: "contain" }}
          />
        </Box>

        {/* ACTIONS */}
        <Box flex="1 1 50%" mb="40px">
          <Box m="65px 0 25px 0">
            <Typography variant="h3">{productSelected?.title}</Typography>
            <Typography fontWeight="bold">${productSelected?.price}</Typography>

            <Typography sx={{ mt: "20px" }}>
              {productSelected?.description}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.neutral[300]}`}
              mr="20px"
              p="2px 5px"
            >
              <IconButton onClick={DecCountHandler}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ p: "0 5px" }}>{count}</Typography>

              <IconButton onClick={addCountHandler}>
                <AddIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                gap: "1rem",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#222222",
                  color: "white",
                  borderRadius: 0,
                  minWidth: "150px",
                  padding: "10px 40px",
                }}
                onClick={showAddedItem}
              >
                <ToastContainer />
                ADD TO CART
              </Button>

              <Link to='/cart'>
                <Button
                  sx={{
                    backgroundColor: "#222222",
                    color: "white",
                    borderRadius: 0,
                    minWidth: "150px",
                    padding: "10px 40px",
                  }}
                >
                  BUY NOW
                </Button>
              </Link>
            </Box>
          </Box>
          <Box>
            <Box m="20px 0 5px 0" display="flex">
              <FavoriteBorderOutlinedIcon />
              <Typography sx={{ ml: "5px" }}>ADD TO WISHLIST</Typography>
            </Box>
            <Typography>CATEGORIES: NA </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetail;
