// TODO: Dynamic import
import React from "react";
import DashboardBlockServiceStatus from "@/components/BlocksPage/DashboardBlockServiceStatus";
import DashboardBlockHappeningNow from "@/components/BlocksPage/DashboardBlockHappeningNow";
import DashboardBlockServicesList from "@/components/BlocksPage/DashboardBlockServicesList";
import DashboardBlockAnnouncement from "@/components/BlocksPage/DashboardBlockAnnouncement";

const DashboardHome = () => {
  return (
    <div>
      <DashboardBlockServiceStatus />
      <DashboardBlockHappeningNow />
      <DashboardBlockServicesList />
      <DashboardBlockAnnouncement />
    </div>
  );
};

export default DashboardHome;
