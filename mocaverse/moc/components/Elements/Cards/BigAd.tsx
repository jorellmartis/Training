import { styled, theme } from "@/stitches";
import ImageComponent from "@/components/UIKit/Image";
import Typography from "@/components/UIKit/Typography";
import Avatar from "@/components/UIKit/Avatar";
import Badge from "@/components/UIKit/Badge";
import Button from "@/components/UIKit/Button";
import React from "react";
import Flex from "@/components/UIKit/Flex";

const Wrapper = styled("div", {
  display: "flex",
  background: theme.colors.white,
  borderRadius: theme.radius.sm,
  overflow: "hidden",
});

const Content = styled("div", {
  flex: "1 0 58%",
  padding: "40px 25px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  h3: {
    margin: "10px 0",
  },
  p: {
    margin: "25px 0 10px",
  },
});

const Image = styled("div", {
  flex: "1 0 42%",
  "> div": {
    height: "100%",
  },
  img: {
    objectFit: "cover",
  },
});

const FlexWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  columnGap: 10,
});

const BigAd = () => {
  return (
    <Wrapper>
      <Content>
        <Flex alignItems="center">
          <Typography as="span" level={8}>
            Announcement by
          </Typography>
          <FlexWrapper>
            <Avatar size={24} />
            <Typography as="span" level={8}>
              Henry Bill
            </Typography>
          </FlexWrapper>
        </Flex>
        <Typography as="h3" level={2}>
          Our New Remote
          <br />
          Work Policy
        </Typography>
        <FlexWrapper>
          <Badge>MOF</Badge>
          <Typography as="span" level={9}>
            Policies · 19 Dec 2022
          </Typography>
        </FlexWrapper>

        <Typography as="p" level={8}>
          Vestibulum cursus molestie morbi tincidunt magnis varius ac, etiam
          morbi. Aenean varius maecenas faucibus sociis risus. Nam duis
          suspendisse quisque fames consectetur arcu.
        </Typography>
        <Button type="textlink" href="/dashboard">
          Read More
        </Button>
      </Content>
      <Image>
        <ImageComponent
          src="/placeholder.jpg"
          fill
          alt="Our new Remote policy"
        />
      </Image>
    </Wrapper>
  );
};

export default BigAd;
