import * as React from "react";
import styled from "@emotion/styled";
import { Pane } from "evergreen-ui";
import { BackgroundPreviewData } from "../../data/preview-data";
import { ReactComponent as PreviousIcon } from "../../assets/images/icon-previous.svg";
import { ReactComponent as NextIcon } from "../../assets/images/icon-next.svg";

const SlideContainer = styled(Pane)`
  transform: translateX(-${(props) => props.translatevalue}px);
  transition: transform ease-out ${(props) => props.transit}s;
  height: 100%;
  width: ${(props) => props.width}px;
`;

const getWidth = () => window.innerWidth;

function LandingPageSlider() {
  const [state, setState] = React.useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.5,
  });

  const { activeSlide, translate, transition } = state;

  // React.useEffect(() => {

  //   resizeRef.current = handleResize;
  // });

  // const slideWidth = 400;

  const prevSlide = () => {
    if (activeSlide > 0) {
      setState({
        ...state,
        activeSlide: activeSlide - 1,
        translate: translate - getWidth(),
      });
    }

    console.log(activeSlide);
  };

  const nextSlide = () => {
    if (activeSlide < BackgroundPreviewData.length - 1) {
      setState({
        ...state,
        translate: translate + getWidth(),
        activeSlide: activeSlide + 1,
      });

      console.log(activeSlide, translate);
    }
  };

  // const handleResize = () => {
  //   setState({ ...state, translate: getWidth(), transition: 0 });
  // };

  // React.useEffect(() => {
  //   const slider = sliderRef.current;

  //   const resize = () => {
  //     resizeRef.current();
  //   };

  //   const onResize = window.addEventListener('resize', resize);

  //   return () => {

  //     window.removeEventListener('resize', onResize);
  //   };

  // }, []);

  return (
    <>
      {/* <Pane
        height="100%"
        width={getWidth() * BackgroundPreviewData.length}
        border="3px solid blue"
      > */}
      <SlideContainer
        height="100%"
        display="flex"
        position="relative"
        zIndex={5}
        translatevalue={translate}
        transit={transition}
        width={getWidth() * BackgroundPreviewData.length}
      >
        {BackgroundPreviewData.map((slide, i) => {
          return (
            <Pane
              key={i}
              height="100%"
              // width="100%"
              // width="400px"
              width={getWidth()}
              // overflowX="hidden"
            >
              <Pane
                height="100%"
                // height="60vh"
                // width="400px"
                width={getWidth()}
                backgroundImage={`url("${slide.imgSrc}")`}
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                backgroundSize="cover"
                position="relative"
              ></Pane>
            </Pane>
          );
        })}
      </SlideContainer>

      <Pane
        backgroundColor="white"
        paddingX="12px"
        paddingY="10px"
        position="absolute"
        top="30%"
        borderRadius="50%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        zIndex={7}
      >
        <PreviousIcon onClick={prevSlide} />
      </Pane>

      <Pane
        backgroundColor="white"
        paddingX="9px"
        paddingY="7px"
        position="absolute"
        top="40%"
        right={0}
        borderRadius="50%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        zIndex={7}
      >
        <NextIcon onClick={nextSlide} />
      </Pane>
      {/* </Pane> */}
    </>
  );
}

export default LandingPageSlider;
