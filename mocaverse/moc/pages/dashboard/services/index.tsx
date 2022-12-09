import Breadcrumb from "@/components/UIKit/Breadcrumb";
import Tabs from "@/components/UIKit/Tabs";
import FeaturedServices from "@/components/Elements/Containers/ServicesFeaturedServices";
import AllServices from "@/components/Elements/Containers/ServicesAllServices";
import t from "@/utils/t";

const Services = () => {
  return (
    <>
      <Breadcrumb
        title={t("Services.AllServices")}
        trail={[
          { title: t("Sidebar.eServices"), link: "/dashboard/services" },
          { title: t("Services.AllServices") },
        ]}
      />
      <Tabs
        list={[
          {
            title: t("Services.FeaturedServices.TabTitle"),
            content: <FeaturedServices />,
          },
          {
            title: t("Services.AllServices"),
            content: <AllServices />,
          },
        ]}
      />
    </>
  );
};

export default Services;
