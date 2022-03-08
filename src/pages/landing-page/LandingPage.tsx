import { Pane, majorScale } from "evergreen-ui";
import ProductDetail from "../../components/product-detail/product-detail";
import ProductPreview from "../../components/product-preview/product-preview";

function SneakersLandingPage() {
  return (
    // <div style={{ width: "80%", margin: "auto", display: "flex" }}>
    //   <div style={{ width: "50%", padding: "50px 70px" }}>
    //     <div style={{ border: "1px solid red", borderRadius: "20px" }}>kgb</div>
    //   </div>
    //   <div style={{ width: "50%" }}>
    //     <ProductDetail />
    //   </div>
    // </div>

    <Pane display="flex" width="80%" margin="auto" marginTop={majorScale(5)}>
      <Pane className="col-md-6" border="1px solid blue">
        {/* <Pane style={{ border: "1px solid red", borderRadius: "20px" }}>
          kgb
        </Pane> */}
        <ProductPreview />
      </Pane>
      <Pane className="col-md-6" border="1px solid green">
        <ProductDetail />
      </Pane>
    </Pane>
  );
}

export default SneakersLandingPage;
