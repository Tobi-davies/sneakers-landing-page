import * as React from "react";
import styled from "@emotion/styled";
import { Pane, majorScale } from "evergreen-ui";
import CartIcon from "../../assets/images/icon-cart.svg";
import Avatar from "../../assets/images/image-avatar.png";
import { CartCountContext } from "../../context/cart-context";

const Cart = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartCount = styled.div`
  position: absolute;
  top: -2px;
  right: -10px;
  border: 1px solid red;
  font-size: 6px;
  padding: 0px 7px;
  background-color: var(--primary-orange-color);
  color: var(--white-color);
  border-radius: 10px;
`;

function UserCart() {
  const { itemCount, toggleCheckout } = React.useContext(CartCountContext);

  return (
    <Pane display="flex" alignItems="center">
      <Cart onClick={toggleCheckout}>
        <img src={CartIcon} alt="Menu" style={{ verticalAlign: "middle" }} />
        <CartCount>{itemCount}</CartCount>
      </Cart>

      <Pane
        height={majorScale(5)}
        width={majorScale(5)}
        border="1px solid red"
        borderRadius="50%"
        display="flex"
        alignItems="center"
        marginLeft={majorScale(4)}
        cursor="pointer"
      >
        <img
          src={Avatar}
          alt="Menu"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Pane>
    </Pane>
  );
}

export default UserCart;
