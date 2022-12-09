import { ReactNode } from "react";
import { VariantProps } from "@stitches/react";
import { styled, theme } from "@/stitches";

const TextStyled = styled("div", {
  fontStyle: "normal",
  marginBottom: 0,
  marginTop: 0,
  color: "inherit",
  variants: {
    level: {
      1: {
        fontSize: theme.typography.fontSizeH1,
        lineHeight: theme.typography.lineHeightH1,
      },
      2: {
        fontSize: theme.typography.fontSizeH2,
        lineHeight: theme.typography.lineHeightH2,
      },
      3: {
        fontSize: theme.typography.fontSizeH3,
        lineHeight: theme.typography.lineHeightH3,
      },
      4: {
        fontSize: theme.typography.fontSizeH4,
        lineHeight: theme.typography.lineHeightH4,
      },
      5: {
        fontSize: theme.typography.fontSizeH5,
        lineHeight: theme.typography.lineHeightH5,
      },
      6: {
        fontSize: theme.typography.fontSizeH6,
        lineHeight: theme.typography.lineHeightH6,
      },
      7: {
        fontSize: theme.typography.fontSizeH7,
        lineHeight: theme.typography.lineHeightH7,
      },
      8: {
        fontSize: theme.typography.fontSizeH8,
        lineHeight: theme.typography.lineHeightH8,
      },
      9: {
        fontSize: theme.typography.fontSizeH9,
        lineHeight: theme.typography.lineHeightH9,
      },
    },
    textOverflow: {
      ellipsis: {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
      },
    },
  },
});

interface TypographyProps extends VariantProps<typeof TextStyled> {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  as?: any;
  href?: string;
  textOverflow?: "ellipsis";
  target?: string;
}

const Typography = ({ children, ...rest }: TypographyProps) => (
  <TextStyled {...rest}>{children}</TextStyled>
);

export default Typography;
