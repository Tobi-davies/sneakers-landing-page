import * as React from "react";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import { Pane, majorScale, minorScale, Text } from "evergreen-ui";
import { BackgroundPreviewData } from "../../data/preview-data";
import { VIEWPORT_BREAKPOINTS } from "../../enums/index";

const DesktopPreview = () => {
  const [currentImage, setCurrentImage] = React.useState(
    BackgroundPreviewData[0].imgSrc
  );

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
    <>
      <Pane
        height={isMediumScreen ? "60vh" : "50vh"}
        width={
          isLargeScreen
            ? "100%"
            : isMediumScreen
            ? "400px"
            : isSmallScreen
            ? "90%"
            : "100%"
        }
        margin={isLargeScreen ? "unset" : "auto"}
        marginBottom={majorScale(4)}
        borderRadius={minorScale(3)}
      >
        <Pane
          width="100%"
          height="100%"
          backgroundColor="var(--light-grayish-blue)"
          backgroundImage={`url("${currentImage}")`}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          borderRadius={isSmallScreen ? majorScale(2) : "unset"}
          cursor="pointer"
          // onClick={handleClick}
        />
      </Pane>
      {isSmallScreen && (
        <Pane
          // display="flex"
          // className="row"
          border="1px solid green"
          // marginLeft="-15px"
          // width={isSmallScreen ? "400px" : isLargeScreen ? "unset" : "unset"}
          // marginX={isLargeScreen ? "unset" : "auto"}

          // margin="auto"
          // width="300px"
          maxWidth={500}
          margin="auto"
          // display="grid"
          // gridTemplateColumns="1fr 1fr 1fr 1fr"
          // gridGap={10}
          display="flex"
          alignItems="center"
        >
          {BackgroundPreviewData.map((img, i) => (
            <Pane
              // className="col-md-3"
              key={i}
              border="1px solid red"
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="25%"
            >
              <Pane
                border="1px solid var(----primary-orange-color)"
                // height={isSmallScreen ? "90px" : "70px"}
                height={isMediumScreen ? "80px" : "70px"}
                width={isMediumScreen ? "80px" : "70px"}
                borderRadius="20px"
                cursor="pointer"
                onClick={() => setCurrentImage(BackgroundPreviewData[i].imgSrc)}
                // display="flex"
                // alignItems="center"
              >
                <img
                  src={img.productBanner}
                  alt=""
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "20px",
                  }}
                />
              </Pane>
            </Pane>
          ))}
        </Pane>
      )}
    </>
  );
};

export default DesktopPreview;
