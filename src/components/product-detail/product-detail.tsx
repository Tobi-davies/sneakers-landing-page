import * as React from "react";
import styled from "@emotion/styled";
import {
  Pane,
  Paragraph,
  Heading,
  majorScale,
  minorScale,
  Text,
  Button,
} from "evergreen-ui";
import { ReactComponent as PlusIcon } from "../../assets/images/icon-plus.svg";
import { ReactComponent as MinusIcon } from "../../assets/images/icon-minus.svg";
import SneakerBanner4 from "../../assets/images/image-product-4.jpg";
// import { ReactComponent as Cart } from "../../assets/images/icon-cart.svg";

const CartButton = styled.button`
  display: flex;
  align-items: center;
  background-color: var(--light-grayish-blue);
  border: none;
  cursor: pointer;
`;

const AddBtn = styled.button`
  background-color: var(--primary-orange-color);
  border: none;
  color: white;
  border-radius: 8px;
  padding: 12px 0;
  font-size: 15px;
  font-family: "Kumbh Sans", sans-serif;
`;

function ProductDetail() {
  const [count, setCount] = React.useState(0);
  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };
  const decreaseCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    } else {
      setCount(0);
    }
  };
  return (
    <Pane paddingX={majorScale(3)} paddingTop={majorScale(14)}>
      <Heading
        fontSize="0.9rem"
        color="var(--primary-orange-color)"
        lineHeight="1rem"
        className="mb-3"
      >
        SNEAKER COMPANY
      </Heading>
      <Paragraph
        fontWeight={700}
        fontSize="3rem"
        color="var(--very-vark-blue)"
        lineHeight="3rem"
      >
        Fall Limited Edition Sneakers
      </Paragraph>
      <Paragraph
        color="var(--dark-grayish-blue)"
        // marginTop={majorScale(4)}
        className="my-4"
        fontSize="1rem"
      >
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </Paragraph>
      <Pane display="flex" flexDirection="column">
        <Pane
          display="flex"
          alignItems="center"
          columnGap={majorScale(2)}
          marginBottom={majorScale(1)}
        >
          <Text
            fontWeight={700}
            fontSize="1.7rem"
            color="var(--very-vark-blue)"
          >
            $125.00
          </Text>
          <Text
            fontWeight={700}
            fontSize="1rem"
            color="var(--primary-orange-color)"
            backgroundColor="var(--pale-orange-color)"
            paddingY={minorScale(1)}
            paddingX={minorScale(2)}
            borderRadius={minorScale(2)}
          >
            50%
          </Text>
        </Pane>
        <Pane
          fontWeight={700}
          color="var(--grayish-blue)"
          textDecoration="line-through"
        >
          $250.00
        </Pane>
      </Pane>

      <Pane
        // border="1px solid red"
        className="mt-4"
        // display="flex"
        // justifyContent="space-between"
        // columnGap={majorScale(4)}
        display="grid"
        gridTemplateColumns="1fr 2fr"
        gap={majorScale(3)}
      >
        <Pane
          // className="col-md-4"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          // backgroundColor="var(--light-grayish-blue)"
          // backgroundColor="var(--light-grayish-blue)"
          backgroundColor="var(--light-grayish-blue)"
          borderRadius={majorScale(1)}
          paddingX={minorScale(2)}
        >
          <CartButton onClick={() => decreaseCount()}>
            <MinusIcon />
          </CartButton>
          <Text color="var(--very-vark-blue)" fontWeight={700}>
            {count}
          </Text>
          <CartButton onClick={() => increaseCount()}>
            <PlusIcon />
          </CartButton>
        </Pane>
        <AddBtn
        //  className="col-md-8"
        >
          Add to cart
        </AddBtn>
        {/* <Button
          className="col-md-7"
          backgroundColor="var(--primary-orange-color)"
          color="white"
          // border="var(--primary-orange-color)"
          paddingY={minorScale(5)}
          fontSize="1rem"
        >
          Add to cart
        </Button> */}
      </Pane>

      {/* <img src={SneakerBanner4} alt="" /> */}
      {/* <img
        src="https://images.unsplash.com/photo-1640622842008-1897f26aafe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
      /> */}
    </Pane>
  );
}

export default ProductDetail;

// $125.00 50% $250.00 0 Add to cart
