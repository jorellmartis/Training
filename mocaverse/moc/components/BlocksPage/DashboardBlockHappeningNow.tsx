import React from "react";

import t from "@/utils/t";

import Typography from "@/components/UIKit/Typography";
import Carousel from "@/components/UIKit/Carousel";
import Button from "@/components/UIKit/Button";
import Tabs from "@/components/UIKit/Tabs";
import Flex from "@/components/UIKit/Flex";
import HappeningNow from "@/components/Elements/Cards/HappeningNow";
import UpcomingEvent from "@/components/Elements/Cards/UpcomingEvent";
import SelectMultiple from "@/components/Elements/FormFields/MultiSelectInput";

import { styled } from "@/stitches";

const UpcomingEventsWrapper = styled("div", {
  display: "flex",
  rowGap: "16px",
  flexDirection: "column",
});

const DashboardBlockHappeningNow = () => {
  return (
    <section>
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <Typography level={4} as="h3">
            {t("Dashboard.HappeningNow")}
          </Typography>
          <Tabs
            list={[
              {
                title: t("Rightbar.MyFeatured"),
                content: (
                  <Carousel
                    settings={{
                      fade: true,
                    }}
                    items={[
                      {
                        slide: <HappeningNow />,
                      },
                      { slide: <HappeningNow /> },
                      { slide: <HappeningNow /> },
                    ]}
                  />
                ),
              },
              {
                title: t("Rightbar.RecentServices"),
                content: t("Rightbar.Empty"),
              },
            ]}
          />
        </div>
        <div className="col-xs-12 col-sm-6">
          <Typography level={4} as="h3">
            {t("Dashboard.HappeningNow")}
          </Typography>

          <Flex justifyContent="spaceBetween">
            <Typography level={6} as="span">
              June 2023
            </Typography>
            <Button href="/dashboard/events" type="textlink">
              {t("Dashboard.AllEvents")}
            </Button>
          </Flex>
          <UpcomingEventsWrapper>
            <UpcomingEvent />
            <UpcomingEvent />
            <UpcomingEvent />
            <UpcomingEvent />
            <UpcomingEvent />
            <UpcomingEvent />
            <UpcomingEvent />
          </UpcomingEventsWrapper>
        </div>
      </div>
    </section>
  );
};

export default DashboardBlockHappeningNow;
