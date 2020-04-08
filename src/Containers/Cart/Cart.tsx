import React, { useEffect } from "react";
import styles from "./Cart.styles";
import { connect } from "react-redux";
import NoItemInCart from "../../Components/NoItemInCart/NoItemInCart";
import CartItems from "../../Components/CartItems/CartItems";
import { getCart } from "../../Store/Action/Cart";
import Background from "../../Components/Background/Background";

const Cart = ({ isAuthenticated, products, getCart }: CartProps) => {
  const classes = styles();

  useEffect(() => {
    getCart();
  });

  if (!isAuthenticated) return <div>You are not Authenticated</div>;

  return (
    <>
      {products.length ? (
        <Background className={classes.background}>
          <h1 className={classes.annotation}>Proceed to Buy</h1>
          <CartItems />
        </Background>
      ) : (
        <NoItemInCart />
      )}
    </>
  );
};

interface CartProps {
  isAuthenticated: boolean;
  products: Array<any>;
  getCart: () => void;
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.user.authenticated,
    products: state.user.data.cart?.products
  };
};

const mapDispatchToProps = { getCart };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);