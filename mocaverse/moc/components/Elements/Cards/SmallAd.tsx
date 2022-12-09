import React from "react";
import Card from "@/components/UIKit/Card";
import Typography from "@/components/UIKit/Typography";
import Button from "@/components/UIKit/Button";
import { styled } from "@/stitches";

const StyledCard = styled(Card, {
  p: {
    margin: "10px 0 20px",
  },
});
type ItemProps = {
  title?: string;
  content?: string | React.ReactNode;
  buttonText: string;
  buttonLink: string;
};

type SmallAddProps = {
  data: ItemProps;
};
const SmallAd = ({ data }: SmallAddProps) => {
  return (
    <StyledCard size="big">
      <Typography level={6} as="h3">
        {data?.title}
      </Typography>
      <Typography level={8} as="p">
        {data?.content}
      </Typography>
      <Button type="button" buttonLength="full" as="a">
        {data?.buttonText}
      </Button>
    </StyledCard>
  );
};

export default SmallAd;
