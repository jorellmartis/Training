import Badge from "@/components/UIKit/Badge";
import Breadcrumb from "@/components/UIKit/Breadcrumb";
import Flex from "@/components/UIKit/Flex";
import Typography from "@/components/UIKit/Typography";
import t from "@/utils/t";

const ServicePage = () => {
  return (
    <div>
      <Breadcrumb
        title="Credit Card Request"
        trail={[
          { title: t("Sidebar.eServices"), link: "/dashboard/services" },
          { title: t("Services.AllServices"), link: "/dashboard/services" },
          { title: "Credit Card Reqiest" },
        ]}
      />
      <Flex
        alignItems="center"
        css={{
          columnGap: 16,
        }}
      >
        <Badge>HR Services</Badge>
        <Typography as="span" level={8}>
          Last updated : 4 Dec 2022
        </Typography>
      </Flex>
    </div>
  );
};

export default ServicePage;
