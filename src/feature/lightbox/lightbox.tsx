import * as React from "react";
import styled from "@emotion/styled";
import { Pane, majorScale, minorScale } from "evergreen-ui";
import { BackgroundPreviewData } from "../../data/preview-data";
import { ReactComponent as CloseIcon } from "../../assets/images/icon-close.svg";
import { ReactComponent as PreviousIcon } from "../../assets/images/icon-previous.svg";
import { ReactComponent as NextIcon } from "../../assets/images/icon-next.svg";

const SlideContainer = styled(Pane)`
  transform: translateX(-${(props) => props.translatevalue}px);
  transition: transform ease-out ${(props) => props.transit}s;
  height: 100%;
  width: ${(props) => props.width}px;
`;

export const OptionsOverlay = styled(Pane)`
  position: relative;
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) => (props.setOverlay ? "#fff" : "unset")};
    border-radius: 7px;
    opacity: 0.7;
    top: 0;
    left: 0;
  }

  &:hover:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 7px;
    opacity: 0.7;
    top: 0;
    left: 0;
  }
`;

// type LightboxProps = {
//   handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
// };

type ChildProps = {
  children: React.ReactNode;
};

function Lightbox(props: ChildProps) {
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);

  const [state, setState] = React.useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.5,
  });

  const { activeSlide, translate, transition } = state;

  const slideWidth = 400;

  console.log(activeSlide, translate);

  const prevSlide = () => {
    if (activeSlide > 0) {
      setState({
        ...state,
        activeSlide: activeSlide - 1,
        translate: translate - slideWidth,
      });
    }

    console.log(activeSlide);
  };

  const nextSlide = () => {
    if (activeSlide < BackgroundPreviewData.length - 1) {
      setState({
        ...state,
        translate: translate + slideWidth,
        activeSlide: activeSlide + 1,
      });

      console.log(activeSlide, translate);
    }
  };

  const handleClose = () => {
    setIsLightboxOpen(false);
  };

  return (
    <>
      {/* {props.children({ handleClick: () => setIsLightboxOpen(true) })} */}

      <Pane
        position="absolute"
        height="100vh"
        width="100vw"
        overflow="hidden"
        zIndex={3}
        backgroundColor="var(--black-lightbox)"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Pane
          color="red"
          maxWidth="400px"
          overflowX="hidden"
          position="relative"
        >
          <Pane
            display="flex"
            alignItems="flex-end"
            paddingBottom={minorScale(2)}
          >
            <CloseIcon
              style={{
                marginLeft: "auto",
                cursor: "pointer",
              }}
              onClick={handleClose}
            />
          </Pane>

          <Pane
            backgroundColor="white"
            paddingX="12px"
            paddingY="10px"
            position="absolute"
            top="40%"
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
            paddingX="12px"
            paddingY="10px"
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

          <SlideContainer
            height="60vh"
            display="flex"
            position="relative"
            zIndex={5}
            translatevalue={translate}
            transit={transition}
            width={slideWidth * BackgroundPreviewData.length}
          >
            {BackgroundPreviewData.map((slide, i) => {
              return (
                <Pane
                  key={i}
                  height="100%"
                  // width="100%"
                  width="400px"
                  overflowX="hidden"
                >
                  <Pane
                    // height="100%"
                    height="60vh"
                    width="400px"
                    backgroundImage={`url("${slide.imgSrc}")`}
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center"
                    backgroundSize="cover"
                    borderRadius="20px"
                    position="relative"
                  ></Pane>
                </Pane>
              );
            })}
          </SlideContainer>

          <Pane className="row mt-3" paddingX={majorScale(3)}>
            {BackgroundPreviewData.map((option, i) => {
              return (
                <Pane
                  key={i}
                  height="60px"
                  width="30px"
                  className="col-3"
                  borderRadius="7px"
                >
                  <OptionsOverlay
                    width="100%"
                    height="100%"
                    backgroundImage={`url("${option.productBanner}")`}
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center"
                    backgroundSize="cover"
                    borderRadius="7px"
                    border={
                      activeSlide === i
                        ? "2px solid var(--primary-orange-color)"
                        : "unset"
                    }
                    setOverlay={activeSlide === i ? true : false}
                  ></OptionsOverlay>
                </Pane>
              );
            })}
          </Pane>
        </Pane>
      </Pane>
    </>
  );
}

export default Lightbox;
