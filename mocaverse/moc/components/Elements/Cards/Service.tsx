import React from "react";
import Typography from "@/components/UIKit/Typography";
import SquircleCard from "@/components/UIKit/Squircle";
import {
  HRServiceColored,
  AirTicketClaimWhite,
} from "@/components/Icons/Services";
import { styled, theme } from "@/stitches";
import Card from "@/components/UIKit/Card";

const ServiceCard = styled(Card, {
  padding: "15px 24px",
  background: theme.colors.hr,
});

const ServiceWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  columnGap: "15px",
  [">div:last-child"]: {
    flex: "auto",
    maxWidth: "calc(100% - 70px)", // 15px column gap 55px size avatar
  },
});

const ServiceText = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  rowGap: "2px",
  maxWidth: "95%",
});

const ServiceIcon = styled(SquircleCard, {
  width: 40,
  height: 40,
  background: theme.colors.white100, //TODO: Make the background dynamic
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

type ServiceProps = {
  style?: object;
  asCard?: boolean;
  serviceType: string;
};

const Service = ({ asCard = false, serviceType, ...props }: ServiceProps) => {
  const ServiceCardContent = () => (
    <ServiceWrapper>
      {asCard ? (
        <AirTicketClaimWhite />
      ) : (
        <ServiceIcon cornerRadius={10}>
          <HRServiceColored />
        </ServiceIcon>
      )}
      <div>
        <ServiceText>
          <Typography level={8} as="h4">
            HR Services
          </Typography>
          <Typography level={7} as="h3" textOverflow="ellipsis">
            Air Ticket
            <br />
            Claim Request
          </Typography>
        </ServiceText>
      </div>
    </ServiceWrapper>
  );
  return asCard ? (
    <ServiceCard
      {...props}
      css={{
        background: theme.colors[serviceType].value,
      }}
    >
      <ServiceCardContent />
    </ServiceCard>
  ) : (
    <ServiceCardContent />
  );
};

export default Service;
