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
import { BackgroundPreviewData } from "../../data/preview-data";

const ProductImage = styled(Pane)`
  background: ${(props) => `url('${props.image}') no-repeat center`};
  background-size: cover;
`;

function ProductPreview() {
  const [currentImage, setCurrentImage] = React.useState(
    BackgroundPreviewData[0].imgSrc
  );

  return (
    <Pane paddingX={majorScale(4)}>
      <Pane
        height="60vh"
        width="100%"
        border="1px solid red"
        marginBottom={majorScale(4)}
      >
        <Pane
          width="100%"
          height="100%"
          backgroundColor="var(--light-grayish-blue)"
          backgroundImage={`url("${currentImage}")`}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          borderTopLeftRadius={minorScale(1)}
          borderBottomLeftRadius={minorScale(1)}
        />
      </Pane>
      <Pane
        // display="flex"
        className="row"
        // marginLeft="15px"
      >
        {BackgroundPreviewData.map((img, i) => (
          <Pane className="col-md-3" key={i}>
            <Pane
              border="1px solid var(----primary-orange-color)"
              height="90px"
              width="90px"
              borderRadius="20px"
              cursor="pointer"
              onClick={() => setCurrentImage(BackgroundPreviewData[i].imgSrc)}
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
    </Pane>
  );
}

export default ProductPreview;
