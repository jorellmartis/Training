import * as AspectRatioComponent from "@radix-ui/react-aspect-ratio";

type AspectRatioProps = {
  children?: React.ReactNode;
  ratio: number;
  asChild?: boolean;
};

const AspectRatio = (props: AspectRatioProps) => (
  <AspectRatioComponent.Root {...props} />
);

export default AspectRatio;
