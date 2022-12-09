import Image from "next/image";
import { styled } from "@/stitches";
import t from "@/utils/t";
const ImageWrapper = styled("div", {
  overflow: "hidden",
  position: "relative",
  img: {
    position: "relative!important",
  },
});
const ImageComponent = (props: any) => {
  return (
    <ImageWrapper>
      <Image {...props} alt={props?.alt || t("Global.SiteTitle")} />
    </ImageWrapper>
  );
};

export default ImageComponent;
