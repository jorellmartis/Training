import { ReactNode } from "react";
import { VariantProps } from "@stitches/react";
import { styled, theme } from "@/stitches";

const StyledBadge = styled("div", {
  display: "inline-flex",
  paddingTop: theme.badge.paddingTop,
  paddingBottom: theme.badge.paddingBottom,
  paddingLeft: theme.badge.paddingLeft,
  paddingRight: theme.badge.paddingRight,
  borderRadius: theme.badge.borderRadius,
  fontSize: theme.badge.fontSize,
  color: theme.badge.fontColor,
  background: theme.badge.background,
});

interface BadgeProps extends VariantProps<typeof StyledBadge> {
  children: ReactNode;
  variants?: "size";
  size?: "small" | "big"; //TODO: Stlye later
}

const Badge = ({ children, ...rest }: BadgeProps) => (
  <StyledBadge {...rest}>{children}</StyledBadge>
);

export default Badge;
