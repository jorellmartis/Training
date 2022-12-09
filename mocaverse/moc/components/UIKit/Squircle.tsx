import { Squircle } from "corner-smoothing";
import { styled, theme } from "@/stitches";

// type SquircleProps = {
//   children?: React.ReactNode;
//   cornerRadius?: number;
//   cornerSmoothing?: number;
//   borderWidth?: number;
//   as?: any;
//   className?: string;
// };
// const SquircleCard = ({
//   children,
//   cornerRadius = 20,
//   ...rest
// }: SquircleProps) => {
//   return (
//     <Squircle cornerRadius={cornerRadius} {...rest}>
//       {children}
//     </Squircle>
//   );
// };

// export default SquircleCard;

// cornerRadius
// cornerSmoothing
// preserveSmoothing
// borderWidth
// as

const SquircledDiv = styled("div", {
  "--squircle-color": theme.colors.black,
  "--squircle-smooth": 1,
});

type SquircleProps = {
  children?: React.ReactNode;
  cornerRadius?: number;
  cornerSmoothing?: number;
  borderWidth?: number;
  borderColor?: string;
  as?: any;
  className?: string;
  style?: any;
};
const SquircleCard = ({
  children,
  cornerRadius = 20,
  borderWidth,
  borderColor,
  ...rest
}: SquircleProps) => {
  return (
    <SquircledDiv
      // cornerRadius={cornerRadius}
      {...rest}
      style={{
        "--squircle-radius": `${cornerRadius}px`,
        ...(borderWidth
          ? {
              background: "paint(squircle)",
              "--squircle-outline": `${borderWidth}px`,
              "--squircle-fill": borderColor,
            }
          : {
              WebkitMaskImage: "paint(squircle)",
              maskImage: "paint(squircle)",
            }),
      }}
    >
      {children}
    </SquircledDiv>
  );
};

export default SquircleCard;
