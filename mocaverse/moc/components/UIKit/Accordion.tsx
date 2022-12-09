// TODO: Make this component config based
import React from "react";
import { styled, keyframes, theme } from "@/stitches";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Chevron } from "@/components/Icons/Utils";
const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

const StyledAccordion = styled(AccordionPrimitive.Root, {
  width: "100%",
});

const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: "hidden",
  marginTop: 1,
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: "unset",
  display: "flex",
  background: theme.accordion.headerBackground,
  svg: {
    transform: "rotate(-90deg)",
    transition: theme.transitions.basic,
  },
  '&[data-state="open"]': {
    svg: {
      transform: "rotate(0)",
    },
  },
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer",
  padding: theme.accordion.triggerPadding,
  fontSize: theme.accordion.triggerFontSize,
  color: theme.accordion.triggerFontColor,
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: "hidden",
  width: "100%",
  transition: "1s all",
  '&[data-state="open"]': {
    animation: `${slideDown} 300ms ease-in-out`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms ease-in-out`,
  },
});

const StyledChevron = styled(Chevron, {
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  "[data-state=open] &": { transform: "rotate(90deg)" },
});

// Exports
export const AccordionComponent = StyledAccordion;
export const AccordionItem = StyledItem;

// Your app...

type AccordionItem = {
  content: React.ReactNode;
  title: string;
};

type AccordionProps = {
  list: Array<AccordionItem>;
  type?: string;
};

export const Accordion = ({
  list,
  type = "single",
}: AccordionProps & AccordionPrimitive.AccordionSingleProps) => (
  <AccordionComponent type={type} collapsible defaultValue="accordion-item-0">
    {list?.map((item, index) => (
      <AccordionItem
        value={`accordion-item-${index}`}
        key={`accordion-item-${index}`}
      >
        <StyledHeader>
          <StyledTrigger>
            {item?.title}
            <StyledChevron aria-hidden />
          </StyledTrigger>
        </StyledHeader>
        <StyledContent>{item?.content}</StyledContent>
      </AccordionItem>
    ))}
  </AccordionComponent>
);

export default Accordion;
