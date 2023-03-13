import React from "react";
import { Badge, IconButton } from "@mui/material";
import { ShoppingBagOutlined } from "@mui/icons-material";

const CartWidget = () => {
  return (
    <Badge
      color="secondary"
      sx={{
        "& .MuiBadge-badge": {
          right: 5,
          top: 5,
          padding: "0 4px",
          height: "14px",
          minWidth: "13px",
        },
      }}
    >
      <IconButton onClick={() => {}} sx={{ color: "black" }}>
        <ShoppingBagOutlined />
      </IconButton>
    </Badge>
  );
};

export default CartWidget;
