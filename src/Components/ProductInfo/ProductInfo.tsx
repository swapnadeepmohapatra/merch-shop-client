import React from "react";
import styles from "./ProductInfo.styles";

//? Main Function
const ProductInfo = ({
  name,
  category,
  price,
  description
}: ProductInfoProps) => {
  const classes = styles();

  //? JSX Return
  return (
    <div className={classes.root}>
      <div className={classes.name}>{name}</div>
      <div className={classes.price}>
        <span className={classes.priceSign}>$</span>
        {price}
      </div>
      <div className={classes.category}>{category}</div>
      <div className={classes.description}>{description}</div>
    </div>
  );
};

interface ProductInfoProps {
  name: string;
  price: number;
  category: string;
  description: string;
}

export default ProductInfo;
