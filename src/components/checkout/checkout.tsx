import * as React from "react";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import { Pane, Text, majorScale, Paragraph, minorScale } from "evergreen-ui";
import { VIEWPORT_BREAKPOINTS } from "../../enums/index";
import StyledBtn from "../custom-button/custom-button";
import { CartCountContext } from "../../context/cart-context";
import { ReactComponent as DeleteIcon } from "../../assets/images/icon-delete.svg";

const CheckoutBtn = styled.button`
  background-color: var(--primary-orange-color);
  border: none;
  color: white;
  border-radius: 8px;
  padding: 12px 0;
  font-size: 15px;
  font-family: "Kumbh Sans", sans-serif;
  cursor: pointer;
  box-shadow: 0px 8px 15px hsla(26, 100%, 55%, 0.3);
  width: 100%;
  margin-top: 10px;
`;

function Checkout() {
  const { cartItems, deleteItem, updateItemCount } = React.useContext(
    CartCountContext
  );

  // const isSmallScreen = useMediaQuery({
  //   query: `(min-width: ${VIEWPORT_BREAKPOINTS.sm}px)`,
  // });

  return (
    <Pane
      backgroundColor="white"
      boxShadow="0 3px 3px 3px rgba(0,0,0, 0.2)"
      borderRadius="8px"
    >
      <Pane
        paddingY={majorScale(1)}
        paddingLeft={majorScale(1)}
        borderBottom="1px solid var( --light-grayish-blue)"
      >
        <Text fontWeight={700}>Cart</Text>
      </Pane>
      <Pane padding={12}>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((cartItem, i) => {
              return (
                <Pane key={i} display="flex" alignItems="center">
                  <Pane height={40} width={40}>
                    <img
                      src={cartItem.img}
                      alt="product banner"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: "4px",
                      }}
                    />
                  </Pane>
                  <Pane marginLeft={majorScale(1)}>
                    <Paragraph>{cartItem.name}</Paragraph>
                    <Paragraph>
                      ${cartItem.price} x {cartItem.itemCount}{" "}
                      <strong>${cartItem.price * cartItem.itemCount}</strong>
                    </Paragraph>
                  </Pane>
                  <DeleteIcon
                    cursor="pointer"
                    onClick={() => {
                      deleteItem(cartItem.id);
                      updateItemCount(0);
                    }}
                    style={{
                      marginLeft: "auto",
                    }}
                  />
                </Pane>
              );
            })}
            <CheckoutBtn>Checkout</CheckoutBtn>
          </>
        ) : (
          <Paragraph
            color="var(--dark-grayish-blue)"
            fontSize="13px"
            textAlign="center"
            paddingY={majorScale(4)}
            fontWeight={700}
          >
            Your cart is empty
          </Paragraph>
        )}
      </Pane>
    </Pane>
  );
}

export default Checkout;
