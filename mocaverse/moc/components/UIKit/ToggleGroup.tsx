import React from "react";
import * as GroupToggle from "@radix-ui/react-toggle-group";
import SquircleCard from "@/components/UIKit/Squircle";
import { styled } from "@/stitches";
import { GridView, ListView } from "@/components/Icons/Utils";

const StyledToggle = styled(SquircleCard, {
  "--squircle-fill": "#464E52",
});
const StyledToggleRoot = styled(GroupToggle.Root, {
  height: "100%",
  display: "flex",
});
const StyledToggleItem = styled(GroupToggle.Item, {
  appearance: "none",
  height: "100%",
  border: "none",
  background: "none",
  cursor: "pointer",
  width: 54,
  "&[data-state='on']": {
    background: "#464E52",
  },
});
const ToggleGroup = () => (
  <StyledToggle cornerRadius={12} borderWidth={1}>
    <StyledToggleRoot
      className="GroupToggle"
      type="single"
      defaultValue="center"
      aria-label="Text alignment"
    >
      <StyledToggleItem
        className="GroupToggleItem"
        value="left"
        aria-label="Left aligned"
      >
        <GridView />
      </StyledToggleItem>
      <StyledToggleItem
        className="GroupToggleItem"
        value="center"
        aria-label="Center aligned"
      >
        <ListView />
      </StyledToggleItem>
    </StyledToggleRoot>
  </StyledToggle>
);

export default ToggleGroup;
