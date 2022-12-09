import React from "react";
import Typography from "@/components/UIKit/Typography";
import Service from "@/components/Elements/Cards/Service";

import t from "@/utils/t";

const DashboardBlockServicesList = () => {
  return (
    <section>
      <Typography level={4} as="h2">
        {t("Dashboard.NewServicesMOCA")}
      </Typography>
      <div className="row">
        <div className="col-xs-12 col-sm-4">
          <Service serviceType="hr" />
        </div>
        <div className="col-xs-12 col-sm-4">
          <Service serviceType="hr" />
        </div>
        <div className="col-xs-12 col-sm-4">
          <Service serviceType="hr" />
        </div>
      </div>
    </section>
  );
};

export default DashboardBlockServicesList;
