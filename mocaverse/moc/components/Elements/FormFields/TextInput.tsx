import SquircleCard from "@/components/UIKit/Squircle";
import { styled, theme } from "@/stitches";

const InputWrapper = styled(SquircleCard, {
  background: "#464E52",
  display: "flex",
  alignItems: "center",
  columnGap: 10,
  padding: "15px 20px",
  "--squircle-fill": "#464E52",
});

const Input = styled("input", {
  border: "none",
  fontSize: "1.4rem",
  outline: "none",
  color: theme.colors.white,
  background: "transparent",
  "&::placeholder": {
    color: "#464E52",
  },
});

const InputIcon = styled("div", {});

type TextInputProps = {
  name: string;
  placeholder?: string;
  prefix?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({ prefix, ...props }: TextInputProps) => {
  return (
    <InputWrapper cornerRadius={12} borderWidth={1}>
      {prefix ? <InputIcon>{prefix}</InputIcon> : null}
      <Input {...props} />{" "}
    </InputWrapper>
  );
};

export default TextInput;
