import React from "react";
import Typography from "@/components/UIKit/Typography";
import ServiceStatus from "@/components/Elements/Cards/ServiceStatus";

import t from "@/utils/t";

const DashboardBlockServiceStatus = () => {
  return (
    <section>
      <Typography level={4} as="h2">
        {t("Dashboard.ServiceStatus")}
      </Typography>
      <div className="row">
        <div className="col-xs-12 col-sm-4">
          <ServiceStatus />
        </div>
        <div className="col-xs-12 col-sm-4">
          <ServiceStatus />
        </div>
        <div className="col-xs-12 col-sm-4">
          <ServiceStatus />
        </div>
      </div>
    </section>
  );
};

export default DashboardBlockServiceStatus;
