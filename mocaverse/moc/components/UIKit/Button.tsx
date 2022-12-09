import { ReactNode } from "react";
import { styled, theme } from "@/stitches";
import { withRouter, NextRouter } from "next/router";
import SquircleCard from "@/components/UIKit/Squircle";

interface WithRouterProps {
  router: NextRouter;
}

const StyledButton = styled("a", {
  appearance: "none",
  display: "inline-flex",
  cursor: "pointer",
  color: theme.button.defaultFontColor,
  variants: {
    buttonSize: {
      small: {
        paddingLeft: theme.button.paddingLeftSmall,
        paddingRight: theme.button.paddingRightSmall,
        paddingTop: theme.button.paddingTopSmall,
        paddingBottom: theme.button.paddingBottomSmall,
        border: "none",
        fontSize: theme.button.fontSizeSmall,
      },
      big: {
        paddingLeft: theme.button.paddingLeftBig,
        paddingRight: theme.button.paddingRightBig,
        paddingTop: theme.button.paddingTopBig,
        paddingBottom: theme.button.paddingBottomBig,
        border: "none",
        fontSize: theme.button.fontSizeBig,
      },
    },
    type: {
      textlink: {
        fontSize: theme.button.textLinkFontSize,
        color: "inherit",
      },
      button: {
        backgroundColor: theme.button.backgroundColor,
        paddingLeft: theme.button.paddingLeft,
        paddingRight: theme.button.paddingRight,
        paddingTop: theme.button.paddingTop,
        paddingBottom: theme.button.paddingBottom,
        border: "none",
        fontSize: theme.button.fontSize,
        borderRadius: theme.button.borderRadius,
        justifyContent: "center",
      },
    },
    buttonLength: {
      full: {
        width: "100%",
      },
    },
  },
});

interface ButtonProps extends WithRouterProps {
  children?: ReactNode;
  as?: string | ReactNode;
  buttonSize?: "small" | "big";
  buttonLength?: "full";
  type?: "button" | "textlink";
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Button = ({ children, href, router, onClick, ...rest }: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href) {
      router.push(href);
    } else if (onClick) {
      onClick(e);
    }
  };
  return (
    <SquircleCard cornerRadius={10}>
      <StyledButton onClick={handleClick} {...rest}>
        {children}
      </StyledButton>
    </SquircleCard>
  );
};

export default withRouter(Button);
