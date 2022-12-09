import { styled, theme } from "@/stitches";

const ProgressBarWrapper = styled("div", {
  height: theme.progressBar.height,
  background: theme.progressBar.background,
  width: "100%",
  margin: "16px 0",
  position: "relative",
});

const ProgressBar = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  background: theme.colors.primary,
});

type ProgressProps = {
  progress: number;
};

const Progress = ({ progress }: ProgressProps) => {
  return (
    <ProgressBarWrapper>
      <ProgressBar
        style={{
          width: `${progress}%`,
        }}
      />
    </ProgressBarWrapper>
  );
};

export default Progress;
