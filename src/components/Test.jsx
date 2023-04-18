import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {data}  from "../services/handlePromise";

const Test = () => {
  const { productId } = useParams();

  const productSelected = data.find(
    (product) => product.id === productId
  );

  console.log('ProductID',productId);
  console.log('productSelected',productSelected);

  return <>
    <div style={{padding:'5rem'}}>
        <h5>{productSelected.pictureUrl}</h5>
        <h5>{productSelected.id}</h5>
        <h5>{productSelected.title}</h5>
        <h5>{productSelected.description}</h5>
        <h5>{productSelected.price}</h5>
    </div>
  </>;
};

export default Test;
