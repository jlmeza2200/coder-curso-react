import React from 'react'
import ItemCount from './ItemCount'
import {Box} from '@mui/material';

const ItemListContainer = ({greeting}) => {
  return (
    <Box
      padding='300px 200px'
    >
      <h2>ItemListContainer</h2>
      <h3>{greeting}</h3>
      <ItemCount stock={5} initial={1}/>
    </Box>
  )
}

export default ItemListContainer