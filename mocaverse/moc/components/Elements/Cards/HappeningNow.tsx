import React from "react";
import Link from "next/link";
import ImageComponent from "@/components/UIKit/Image";
import Badge from "@/components/UIKit/Badge";
import Typography from "@/components/UIKit/Typography";
import SquircleCard from "@/components/UIKit/Squircle";
import Flex from "@/components/UIKit/Flex";
import AspectRatio from "@/components/UIKit/AspectRatio";
import { styled } from "@/stitches";

const Wrapper = styled(SquircleCard, {
  position: "relative",
  height: "100%",
  padding: "30px",
  a: {
    display: "flex",
    height: "100%",
  },
});

const Image = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: "-1",
  img: {
    position: "absolute!important",
    objectFit: "cover",
  },
  "> div": {
    height: "100%",
  },
  "&:before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    background:
      "linear-gradient(360deg, rgba(7, 11, 21, 0.68) 16.12%, rgba(7, 11, 21, 0.68) 16.12%, rgba(7, 11, 21, 0.31) 97.84%)",
  },
});

const Text = styled(Flex, {
  h3: {
    marginTop: "16px",
  },
  span: {
    // marginInlineStart: "10px",
    marginBottom: "auto",
  },
});

const HappeningNow = () => {
  return (
    <Wrapper cornerRadius={30}>
      <Link href="/dashboard">
        <Image>
          <ImageComponent
            src="/whats-on.jpg"
            fill
            css={{
              objectFit: "cover",
            }}
            alt="How to evolve"
          />
        </Image>
        <Text flexDirection="column" justifyContent="flexEnd">
          <Typography level={9} as="span">
            1 hour ago
          </Typography>
          <Flex
            css={{
              columnGap: 7,
              rowGap: 7,
            }}
          >
            <Badge>MOCA</Badge>
            <Badge>Employee Update</Badge>
          </Flex>
          <Typography level={4} as="h3">
            How to evolve into a Superhuman with your Digital Mind Palace
          </Typography>
        </Text>
      </Link>
    </Wrapper>
  );
};

export default HappeningNow;
