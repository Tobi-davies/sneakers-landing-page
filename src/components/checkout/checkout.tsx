import { useMediaQuery } from "react-responsive";
import { Pane, Text, majorScale, Paragraph } from "evergreen-ui";
import { VIEWPORT_BREAKPOINTS } from "../../enums/index";
import StyledBtn from "../custom-button/custom-button";

function Checkout() {
  const isSmallScreen = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.sm}px)`,
  });

  return (
    <Pane
      backgroundColor="white"
      // border="1px solid rgba(0,0,0, 0.5)"
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
      <Pane>
        <Paragraph
          color="var(--dark-grayish-blue)"
          fontSize="13px"
          textAlign="center"
          paddingY={majorScale(4)}
          fontWeight={700}
        >
          Your cart is empty
        </Paragraph>
        {/* <Pane width="80%" margin="auto">
        <StyledBtn>Checkout</StyledBtn>
      </Pane> */}
      </Pane>
    </Pane>
  );
}

export default Checkout;
