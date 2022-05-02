import * as React from "react";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import {
  Pane,
  Paragraph,
  Heading,
  majorScale,
  minorScale,
  Text,
} from "evergreen-ui";
import { ReactComponent as PlusIcon } from "../../assets/images/icon-plus.svg";
import { ReactComponent as MinusIcon } from "../../assets/images/icon-minus.svg";
import { VIEWPORT_BREAKPOINTS } from "../../enums/index";
import { productDetails } from "../../data/preview-data";
import { CartCountContext } from "../../context/cart-context";

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
  cursor: pointer;
  box-shadow: 0px 8px 15px hsla(26, 100%, 55%, 0.3);
`;

function ProductDetail() {
  const {
    itemCount,
    updateItemCount,
    updateCart,
    cartItems,
  } = React.useContext(CartCountContext);

  const [count, setCount] = React.useState(1);
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

  const {
    id,
    name,
    description,
    currentPrice,
    discount,
    previousPrice,
    productImage,
  } = productDetails;

  // React.useEffect(() => {
  //   updateItemCount(count);
  // }, [count]);

  const isSmallScreen = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.sm}px)`,
  });

  const isMediumScreen = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.md}px)`,
  });

  const isLargeScreen = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.lg}px)`,
  });
  return (
    <Pane
      paddingX={isMediumScreen ? majorScale(3) : majorScale(1)}
      paddingTop={isLargeScreen ? majorScale(14) : majorScale(3)}
      paddingBottom={isLargeScreen ? "" : majorScale(4)}
    >
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
        fontSize={isSmallScreen ? "3rem" : "2rem"}
        color="var(--very-vark-blue)"
        lineHeight={isSmallScreen ? "3rem" : 1}
        maxWidth={isSmallScreen ? "500px" : isLargeScreen ? "100%" : "unset"}
      >
        {name}
      </Paragraph>
      <Paragraph
        color="var(--dark-grayish-blue)"
        className="my-4"
        fontSize="1rem"
        maxWidth={isSmallScreen ? "600px" : isLargeScreen ? "unset" : "100%"}
      >
        {description}
      </Paragraph>
      <Pane
        display="flex"
        flexDirection={isSmallScreen ? "column" : "row"}
        alignItems={isSmallScreen ? "" : "center"}
        justifyContent={isSmallScreen ? "" : "space-between"}
      >
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
            ${currentPrice.toFixed(2)}
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
            {discount}%
          </Text>
        </Pane>
        <Pane
          fontWeight={700}
          color="var(--grayish-blue)"
          textDecoration="line-through"
        >
          ${previousPrice.toFixed(2)}
        </Pane>
      </Pane>

      <Pane
        className="mt-4"
        display="grid"
        gridTemplateColumns={
          isLargeScreen
            ? "1fr 2fr"
            : isMediumScreen
            ? "1fr 1fr"
            : isSmallScreen
            ? "1fr 2fr"
            : "unset"
        }
        gridTemplateRows="1fr"
        gap={isSmallScreen ? majorScale(3) : majorScale(1)}
        maxWidth={isSmallScreen ? "500px" : isLargeScreen ? "100%" : "unset"}
      >
        <Pane
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          backgroundColor="var(--light-grayish-blue)"
          borderRadius={majorScale(1)}
          paddingX={minorScale(2)}
          paddingY={12}
        >
          <CartButton
            onClick={() => {
              decreaseCount();
            }}
          >
            <MinusIcon />
          </CartButton>
          <Text color="var(--very-vark-blue)" fontWeight={700}>
            {count}
          </Text>
          <CartButton
            onClick={() => {
              increaseCount();
            }}
          >
            <PlusIcon />
          </CartButton>
        </Pane>

        <AddBtn
          onClick={() => {
            updateCart({
              id,
              name,
              price: currentPrice,
              itemCount: count,
              img: productImage,
            });
            updateItemCount(count);
          }}
          disabled={count > 0 ? false : true}
        >
          Add to cart
        </AddBtn>
      </Pane>
    </Pane>
  );
}

export default ProductDetail;
