import { ReactNode } from "react";
import { VariantProps } from "@stitches/react";
import { styled, theme } from "@/stitches";

const StyledSeparator = styled("div", {
  display: "flex",
  borderBottom: `${theme.separator.height} solid ${theme.separator.lineColor}`,
  marginTop: theme.separator.marginTop,
  marginBottom: theme.separator.marginBottom,
  variants: {
    type: {
      vertical: {
        borderBottom: 0,
        borderRight: `${theme.separator.height} solid ${theme.separator.lineColor}`,
        margin: `0 ${theme.separator.marginTop}`,
      },
    },
  },
});

interface SeparatorProps extends VariantProps<typeof StyledSeparator> {
  children?: ReactNode;
  type?: "vertical";
  size?: "small" | "big"; //TODO: Stlye later
}

const Separator = ({ children, ...rest }: SeparatorProps) => (
  <StyledSeparator {...rest} />
);

export default Separator;
