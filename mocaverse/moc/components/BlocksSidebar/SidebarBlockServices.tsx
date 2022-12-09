import React from "react";
import Accordion from "@/components/UIKit/Accordion";
import Tabs from "@/components/UIKit/Tabs";
import Service from "@/components/Elements/Cards/Service";
import t from "@/utils/t";

const SidebarBlockServices = () => {
  return (
    <div>
      <Tabs
        list={[
          {
            title: t("Rightbar.MyFeatured"),
            content: (
              <Accordion
                type="single"
                list={[
                  {
                    content: (
                      <>
                        <Service
                          serviceType="hr"
                          style={{ marginBottom: 15 }}
                        />
                        <Service
                          serviceType="hr"
                          style={{ marginBottom: 15 }}
                        />
                        <Service serviceType="hr" />
                      </>
                    ),
                    title: t("Rightbar.Services"),
                  },
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
  );
};

export default SidebarBlockServices;
