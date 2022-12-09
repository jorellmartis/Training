// TODO: Make this component config based
import React from "react";
import { styled, theme } from "@/stitches";
import * as TabsPrimitive from "@radix-ui/react-tabs";

const StyledTabs = styled(TabsPrimitive.Root, {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  marginBottom: theme.tabs.triggerSpacing,
});

const StyledList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: "flex",
});

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  background: theme.tabs.triggerBackground,
  padding: theme.tabs.triggerPadding,
  marginInlineEnd: theme.tabs.triggerSpacing,
  marginBottom: theme.tabs.triggerSpacing,
  fontSize: theme.tabs.triggerFontSize,
  color: theme.tabs.triggerFontColor,
  transition: theme.transitions.basic,
  border: "none",
  cursor: "pointer",
  borderBottom: "1px solid transparent",
  opacity: "0.4",
  userSelect: "none",
  '&[data-state="active"]': {
    opacity: 1,
    borderColor: theme.tabs.triggerActiveBorder,
  },
  "&:focus": { position: "relative" },
});

const StyledContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  // padding: 20,
  outline: "none",
});

// Exports
export const TabsComponent = StyledTabs;
export const TabsList = StyledList;
export const TabsTrigger = StyledTrigger;
export const TabsContent = StyledContent;

// Your app...
const Box = styled("div", {
  height: "100%",
});

type TabItem = {
  content: React.ReactNode;
  title: string;
};

type TabProps = {
  list: Array<TabItem>;
  title?: string;
};

const Tabs = ({ list, title }: TabProps) => (
  <Box>
    <TabsComponent defaultValue="tab-0">
      <TabsList aria-label={title}>
        {list?.map((tab, index) => (
          <TabsTrigger value={`tab-${index}`} key={`tab-trigger-${index}`}>
            {tab?.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {list?.map((tab, index) => (
        <TabsContent value={`tab-${index}`} key={`tab-content-${index}`}>
          {tab?.content}
        </TabsContent>
      ))}
    </TabsComponent>
  </Box>
);

export default Tabs;
