import BigAd from "@/components/Elements/Cards/BigAd";
import Typography from "@/components/UIKit/Typography";
import Carousel from "@/components/UIKit/Carousel";
import ImageComponent from "@/components/UIKit/Image";
import { styled, theme } from "@/stitches";

const SectionFull = styled("section", {
  position: "relative",
});

const ImageSection = styled("div", {
  position: "absolute",
  width: "100vw",
  height: "100%",
  left: theme.sidebar.minimizedFullWidthBlockoffset,
  zIndex: "-1",
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  // "&:before": {
  //   content: "",
  //   position: "absolute",
  //   top: 0,
  //   zIndex: 2,
  //   width: "100%",
  //   height: "223px",
  //   background:
  //     "linear-gradient(180deg, rgba(217, 217, 217, 0) 16.25%, rgba(217, 217, 217, 0.01) 56.82%, rgba(217, 217, 217, 0) 100%)",
  //   backdropFilter: "blur(53px)",
  // },
});

const DashboardBlockAnnouncement = () => {
  return (
    <SectionFull>
      <ImageSection>
        <ImageComponent src="/main-image-placeholder.jpg" fill />
      </ImageSection>
      <Typography as="h2" level={3}>
        Announcement
      </Typography>
      <Carousel
        settings={{
          fade: true,
        }}
        items={[
          {
            slide: <BigAd />,
          },
          { slide: <BigAd /> },
          { slide: <BigAd /> },
        ]}
      />
    </SectionFull>
  );
};

export default DashboardBlockAnnouncement;
