import SneakerBanner1 from "../assets/images/image-product-1.jpg";
import SneakerBanner2 from "../assets/images/image-product-2.jpg";
import SneakerBanner3 from "../assets/images/image-product-3.jpg";
import SneakerBanner4 from "../assets/images/image-product-4.jpg";
import Sneakerthumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import Sneakerthumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import Sneakerthumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import Sneakerthumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";

export const BackgroundPreviewData = [
  {
    productBanner: Sneakerthumbnail1,
    imgSrc: SneakerBanner1,
  },
  {
    productBanner: Sneakerthumbnail2,
    imgSrc: SneakerBanner2,
  },
  {
    productBanner: Sneakerthumbnail3,
    imgSrc: SneakerBanner3,
  },
  {
    productBanner: Sneakerthumbnail4,
    imgSrc: SneakerBanner4,
  },
];

export const productDetails = {
  id: 1,
  name: "Fall Limited Edition Sneakers",
  description: `These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the
weather can offer`,
  currentPrice: 125.0,
  discount: 50,
  previousPrice: 250.0,
  productImage: Sneakerthumbnail1,
  BackgroundPreviewData: [
    {
      productBanner: Sneakerthumbnail1,
      imgSrc: SneakerBanner1,
    },
    {
      productBanner: Sneakerthumbnail2,
      imgSrc: SneakerBanner2,
    },
    {
      productBanner: Sneakerthumbnail3,
      imgSrc: SneakerBanner3,
    },
    {
      productBanner: Sneakerthumbnail4,
      imgSrc: SneakerBanner4,
    },
  ],
};
