import TextInput from "@/components/Elements/FormFields/TextInput";
import SelectMultiple from "@/components/Elements/FormFields/MultiSelectInput";
import Flex from "@/components/UIKit/Flex";
import ToggleGroup from "@/components/UIKit/ToggleGroup";
import { styled, theme } from "@/stitches";
import { Search } from "@/components/Icons/Utils";
import t from "@/utils/t";
import Typography from "@/components/UIKit/Typography";
import Service from "@/components/Elements/Cards/Service";
import ServiceStatus from "@/components/Elements/Cards/ServiceStatus";

const Filters = styled(Flex, {
  columnGap: 12,
  width: "auto",
  input: {
    width: 300,
  },
});

const ServicesFeaturedServices = () => {
  return (
    <>
      <section>
        <Flex alignItems="center" justifyContent="spaceBetween">
          <Filters>
            <TextInput
              name="keyword"
              prefix={<Search />}
              placeholder={t("Services.FeaturedServices.SearchPlaceholder")}
            />
            <SelectMultiple
              list={[{ key: "hr", title: "HR Services" }]}
              title={t("Services.FeaturedServices.Type")}
              name="type"
            />
            <SelectMultiple
              list={[{ key: "hr", title: "HR Services" }]}
              title={t("Services.FeaturedServices.SubType")}
              name="sub-type"
            />
          </Filters>

          <Filters>
            <SelectMultiple
              list={[{ key: "hr", title: "HR Services" }]}
              title={t("Services.FeaturedServices.Sort")}
              name="Sort"
            />
            <ToggleGroup />
          </Filters>
        </Flex>
      </section>

      <section>
        <Typography level={4} as="h2">
          {t("Services.TrendingServices")}
        </Typography>

        <div className="row">
          <div className="col-xs-12 col-sm-3">
            <Service asCard={true} serviceType="hr" />
          </div>
          <div className="col-xs-12 col-sm-3">
            <Service asCard={true} serviceType="finance" />
          </div>
          <div className="col-xs-12 col-sm-3">
            <Service asCard={true} serviceType="corporate" />
          </div>
          <div className="col-xs-12 col-sm-3">
            <Service asCard={true} serviceType="manager" />
          </div>
        </div>
      </section>

      <section>
        <Typography level={4} as="h2">
          {t("Services.FeaturedServices.FeaturedServices")}
        </Typography>
        <div
          className="row"
          style={{
            rowGap: 30,
          }}
        >
          <div className="col-xs-12 col-sm-4">
            <ServiceStatus isNew={true} />
          </div>
          <div className="col-xs-12 col-sm-4">
            <ServiceStatus isNew={true} />
          </div>
          <div className="col-xs-12 col-sm-4">
            <ServiceStatus isNew={true} />
          </div>
          <div className="col-xs-12 col-sm-4">
            <ServiceStatus isNew={true} />
          </div>
          <div className="col-xs-12 col-sm-4">
            <ServiceStatus isNew={true} />
          </div>
          <div className="col-xs-12 col-sm-4">
            <ServiceStatus isNew={true} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesFeaturedServices;
