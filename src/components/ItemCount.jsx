import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const ItemCount = ({stock, initial}) => {
  const [count, setCount] = useState(initial);

	const addCountHandler = () => {
		setCount(count + 1);
	}

	const DecCountHandler = () => {
		count > 1 && setCount(count - 1);
	}

	const addToCartHandle = () => {
		count <= stock ? alert(`Se agrego al carrito ${count} productos`) : alert('No hay stock del producto');
	}

  return (
    <Box>
      <Box display="flex" alignItems="center" padding="40px">
			<Button variant="text" onClick={DecCountHandler}>
          <Typography variant="h4">-</Typography>
        </Button>
        <Typography variant="h3">{count}</Typography>
				<Button variant="text" onClick={addCountHandler}>
          <Typography variant="h4">+</Typography>
        </Button>
      </Box>

      {/* Btn add to cart */}
      <Box paddingLeft="25px">
        <Button variant="outlined" onClick={addToCartHandle}>Añadir al carrito</Button>
      </Box>
    </Box>
  );
};

export default ItemCount;
