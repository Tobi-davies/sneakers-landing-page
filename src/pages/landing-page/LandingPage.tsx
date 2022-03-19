import { Pane, majorScale, minorScale } from "evergreen-ui";
import { useMediaQuery } from "react-responsive";
import Checkout from "../../components/checkout/checkout";
import Header from "../../components/header/header";
import ProductDetail from "../../components/product-detail/product-detail";
import ProductPreview from "../../components/product-preview/product-preview";
import { VIEWPORT_BREAKPOINTS } from "../../enums/index";
import Lightbox from "../../feature/lightbox/lightbox";

function SneakersLandingPage() {
  const isSmallScreen = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.sm}px)`,
  });

  const isMediumScreen = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.md}px)`,
  });
  return (
    <>
      {/* Lightbox Display */}
      {/* <Lightbox /> */}

      <Pane
        position="relative"
        border="1px solid red"
        maxWidth={1100}
        width="100%"
        margin="auto"
        paddingX={isSmallScreen ? "25px" : ""}
      >
        {/* <Pane width="80%" margin="auto" position="relative"> */}

        <Pane
          position="absolute"
          top={isSmallScreen ? "9vh" : "12vh"}
          right={isSmallScreen ? "5%" : 0}
          maxWidth={isSmallScreen ? "270px" : " unset"}
          width={isSmallScreen ? "100%" : "90%"}
          left={isSmallScreen ? "unset" : 0}
          margin={isSmallScreen ? "" : "auto"}
          zIndex={2}
          // border="1px solid red"
        >
          <Checkout />
        </Pane>
        {/* </Pane> */}

        <Header />

        <Pane
          // className="row"
          display="flex"
          flexWrap="wrap"
          // flexDirection={ismallScreen ? "row" : "column"}
          // width="80%"
          // margin="auto"
          marginTop={isMediumScreen ? majorScale(5) : minorScale(1)}
        >
          <Pane
            className={isSmallScreen ? "col-12 col-lg-6" : ""}
            width={isSmallScreen ? "" : "100%"}
            border="1px solid blue"
          >
            <ProductPreview />
          </Pane>

          <Pane className="col-12 col-lg-6" border="1px solid green">
            <ProductDetail />
          </Pane>
        </Pane>
      </Pane>
    </>
  );
}

export default SneakersLandingPage;
