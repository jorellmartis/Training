import { ReactNode } from "react";
import { VariantProps } from "@stitches/react";
import { styled, theme } from "@/stitches";
import ImageComponent from "./Image";

const StyledAvatar = styled("div", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: theme.radius.circle,
  ["img"]: {
    borderRadius: theme.radius.circle,
  },
});

interface AvatarProps extends VariantProps<typeof StyledAvatar> {
  // children?: ReactNode;
  size?: number;
  as?: "image" | "letters";
}

const StyledLetterAvatar = styled("div", {
  borderRadius: theme.radius.circle,
  width: "100%",
  height: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  background: "$colors$primary100",
});

interface LetterAvatarProps extends VariantProps<typeof StyledLetterAvatar> {
  children?: ReactNode;
  size?: number;
  as?: "image" | "letters";
}

const LetterAvatar = (props: LetterAvatarProps) => (
  <StyledLetterAvatar {...props}>{props.children}</StyledLetterAvatar>
);

const Avatar = ({ as = "image", size = 40, ...rest }: AvatarProps) => (
  <StyledAvatar
    {...rest}
    css={{
      width: `${size}px`,
      height: `${size}px`,
    }}
  >
    {
      {
        image: (
          <ImageComponent
            src="/user.jpg"
            width={size}
            height={size}
            alt="user"
          />
        ),
        letters: <LetterAvatar size={size}>OM</LetterAvatar>,
      }[as]
    }
  </StyledAvatar>
);

export default Avatar;
