import { ReactNode } from "react";
import { VariantProps } from "@stitches/react";
import { styled, theme } from "@/stitches";
import SquircleCard from "@/components/UIKit/Squircle";

const StyledCard = styled("div", {
  borderRadius: theme.card.borderRadius,
  padding: theme.card.padding,
  background: theme.card.background,
  // height: "inherit",
  variants: {
    size: {
      big: {
        padding: theme.card.paddingBig,
      },
    },
  },
});

interface CardProps extends VariantProps<typeof StyledCard> {
  children: ReactNode;
  size?: "big";
  cornerRadius?: number;
}

const Card = ({ children, ...rest }: CardProps) => (
  <SquircleCard {...rest} as={StyledCard}>
    {children}
  </SquircleCard>
);

export default Card;
