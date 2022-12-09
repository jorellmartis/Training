import React from "react";
import Avatar from "@/components/UIKit/Avatar";
import Typography from "@/components/UIKit/Typography";
import { styled } from "@/stitches";

const ContactCard = styled("div", {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  h4: {
    margin: "9px 0 0",
  },
});

const Contact = () => {
  return (
    <ContactCard>
      <Avatar size={40} />
      <Typography as="h4" level={8}>
        Tony W
      </Typography>
      {/* <Typography as="h5" level={9}>
        Lead Manager
      </Typography> */}
    </ContactCard>
  );
};

export default Contact;
