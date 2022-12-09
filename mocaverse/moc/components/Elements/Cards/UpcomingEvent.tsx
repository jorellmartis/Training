import React from "react";
import { styled, theme } from "@/stitches";
import Typography from "@/components/UIKit/Typography";
import Flex from "@/components/UIKit/Flex";
import { AddToCalendar, Bookmark } from "@/components/Icons/Utils";

const Wrapper = styled(Flex, {
  columnGap: "20px",
  "> div": {
    display: "inline-flex",
  },
  "&:hover": {
    a: {
      opacity: 1,
    },
  },
  a: {
    cursor: "pointer",
  },
});

const DateWrapper = styled(Flex, {
  h4: {
    margin: "5px 0",
  },
});

const UpcomingEvent = () => {
  return (
    <Wrapper alignItems="center" flexWrap="none" justifyContent="flexStart">
      <DateWrapper
        flexDirection="column"
        alignItems="center"
        css={{
          flex: 0,
        }}
      >
        <Typography level={9} as="span">
          SUN
        </Typography>
        <Typography level={3} as="h4">
          03
        </Typography>
        <Typography level={9} as="span">
          MAY
        </Typography>
      </DateWrapper>
      <Flex
        flexDirection="column"
        css={{
          flex: 1,
        }}
      >
        <Typography level={7} as="h3">
          UX/UX workshop
        </Typography>
        <Typography level={8} as="h6">
          19:00 - 19:30
        </Typography>
      </Flex>
      <Flex
        alignItems="flexStart"
        justifyContent="spaceBetween"
        css={{ marginInlineStart: "auto", flex: "0 0 78px" }}
      >
        <a>
          <Bookmark />
        </a>
        <a>
          <AddToCalendar />
        </a>
      </Flex>
    </Wrapper>
  );
};

export default UpcomingEvent;
