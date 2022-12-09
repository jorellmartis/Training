import React from "react";
import Typography from "@/components/UIKit/Typography";
import Card from "@/components/UIKit/Card";
import Badge from "@/components/UIKit/Badge";
import Separator from "@/components/UIKit/Separator";
import Avatar from "@/components/UIKit/Avatar";
import Flex from "@/components/UIKit/Flex";
import Progress from "@/components/UIKit/Progress";
import { styled, theme } from "@/stitches";
import {
  Calendar,
  Bookmark,
  WhatsApp,
  SmartPhone,
  Web,
} from "@/components/Icons/Services";
import Button from "@/components/UIKit/Button";

const ServiceStatusHead = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  ".indicator": {
    position: "absolute",
    left: -32,
    top: 0,
    width: 5,
    height: 32,
    background: theme.colors.white,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
});

const ServiceStatusText = styled("div", {
  display: "flex",
  flexDirection: "column",
  rowGap: "6px",
  marginTop: 16,
});

const ServiceStatusBox = styled(Flex, {
  marginTop: 43,
});

const ServiceStatusCard = styled(Card, {
  background: theme.colors.black200,
  padding: 32,
});

const ServiceSeparator = styled(Separator, {
  margin: "19px 0 17px",
});

const ServiceButtons = styled(Flex, {
  columnGap: 17,
  margin: "26px 0 30px",
  "> div": {
    flex: "1",
    a: {
      width: "100%",
    },
  },
});

type ServiceStatusProps = {
  isNew?: boolean;
  showAsList?: boolean;
};

const ServiceStatus = ({
  isNew = false,
  showAsList = false,
}: ServiceStatusProps) => {
  return (
    <ServiceStatusCard cornerRadius={30}>
      <ServiceStatusHead>
        <div className="indicator" />
        <Flex alignItems="center" justifyContent="spaceBetween">
          <Calendar />
          {isNew ? (
            <a>
              <Bookmark />
            </a>
          ) : (
            <Avatar size={32} />
          )}
        </Flex>
        <ServiceStatusText>
          <Typography level={8} as="h4">
            HR Services
          </Typography>
          <Typography level={7} as="h3" textOverflow="ellipsis">
            Dependent Documentation
          </Typography>
        </ServiceStatusText>
        {isNew ? null : (
          <ServiceStatusBox alignItems="center" justifyContent="spaceBetween">
            <Badge>Approved</Badge>
            <Typography as="span" level={9}>
              From 13 Dec 2021
            </Typography>
          </ServiceStatusBox>
        )}
      </ServiceStatusHead>

      {isNew ? (
        <>
          <ServiceSeparator />
          <Typography level={7} as="span">
            SLA : 4 Working Days
          </Typography>
          <ServiceButtons>
            <Button type="button">Learn More</Button>
            <Button type="button">Apply Now</Button>
          </ServiceButtons>
          <Flex alignItems="center" justifyContent="spaceBetween">
            <Typography level={8} as="span">
              Available channels
            </Typography>
            <Flex
              alignItems="center"
              css={{
                columnGap: 8,
              }}
            >
              <WhatsApp />
              <SmartPhone />
              <Web />
            </Flex>
          </Flex>
        </>
      ) : (
        <>
          <Progress progress={50} />
          <Flex alignItems="center" justifyContent="spaceBetween">
            <Typography as="h5" level={8}>
              3 Days Passed
            </Typography>
            <Typography as="h5" level={8}>
              6 Days SLA
            </Typography>
          </Flex>
        </>
      )}
    </ServiceStatusCard>
  );
};

export default ServiceStatus;
