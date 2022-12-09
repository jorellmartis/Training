import Slider from "react-slick";
import React from "react";
import { styled, theme } from "@/stitches";
import { useState } from "react";
import { SliderPrev, SliderNext } from "@/components/Icons/Utils";

const StyledCarousel = styled(Slider, {
  height: "100%",
  ".slick-slide > div, .slick-slide > div > div, .slick-track, .slick-list": {
    height: "100%",
  },
  ".slick-prev:before, .slick-next:before": {
    display: "none",
  },
  ".slick-arrow": {
    height: "auto",
    width: "auto",
    top: 31,
    right: "auto",
    left: "auto",
    padding: 10,
    zIndex: 2,
    "&.slick-next": {
      right: 24,
    },
    "&.slick-prev": {
      right: 45,
    },
  },
  [".slick-dots"]: {
    bottom: "auto",
    top: 21,
    justifyContent: "flex-end",
    display: "flex!important",
    alignItems: "center",
    paddingInlineEnd: theme.slider.dotRightSpacing,

    ["li"]: {
      width: "auto",
      height: theme.slider.dotActiveHeight,
      display: "flex",
      alignItems: "center",
    },
  },
});

const Dots = styled("div", {
  width: theme.slider.dotSizeSmall,
  height: theme.slider.dotSizeSmall,
  background: theme.slider.dotBackground,
  transition: theme.transitions.basic,
  borderRadius: theme.radius.circle,
  span: {
    opacity: 0,
  },
  "&.after, &.before": {
    width: theme.slider.dotSize,
    height: theme.slider.dotSize,
  },
  "&.active": {
    width: theme.slider.dotActiveWidth,
    height: theme.slider.dotActiveHeight,
    padding: theme.slider.dotActivePadding,
    borderRadius: theme.slider.dotActiveRadius,
    span: {
      opacity: 1,
      transition: theme.transitions.basic,

      transitionDelay: "0.3s",
    },
  },
});

type SlideProps = {
  slide: React.ReactNode;
};

type CarouselProps = {
  items: Array<SlideProps>;
  settings?: object;
};

const Carousel = ({ items, settings }: CarouselProps) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    draggable: false,
    prevArrow: (
      <a>
        <SliderPrev />
      </a>
    ),
    nextArrow: (
      <a>
        <SliderNext />
      </a>
    ),
    customPaging: (i: number) => {
      return (
        <Dots
          className={`${activeSlideIndex - 1 === i ? "before" : ""} ${
            activeSlideIndex + 1 === i ? "after" : ""
          } ${activeSlideIndex === i ? "active" : ""}`}
        >
          <span>
            {i + 1} / {items?.length}
          </span>
        </Dots>
      );
    },
    beforeChange: (oldIndex: number, newIndex: number) => {
      // console.log(oldIndex, newIndex);
      setActiveSlideIndex(newIndex);
    },
    ...settings,
  };
  return (
    <StyledCarousel {...carouselSettings}>
      {items?.map((slide, i) => (
        <div key={i}>{slide?.slide}</div>
      ))}
    </StyledCarousel>
  );
};

export default Carousel;
