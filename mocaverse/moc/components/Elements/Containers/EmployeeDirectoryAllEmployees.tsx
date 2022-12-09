import { useEffect, useState } from "react";
import SelectMultiple from "@/components/Elements/FormFields/MultiSelectInput";
import TextInput from "@/components/Elements/FormFields/TextInput";
import Flex from "@/components/UIKit/Flex";
import ToggleGroup from "@/components/UIKit/ToggleGroup";
import { styled } from "@/stitches";
import { Search } from "@/components/Icons/Utils";
import t from "@/utils/t";
import EmployeeCard from "@/components/Elements/Cards/Employee";
import { Employee } from "@/types/employees";
import { getEmployeeList } from "@/api/employee";
import { formatForSelect } from "@/utils/helpers";
import { useAppSelector } from "@/reduxHooks";
import {
  getListOfDepartments,
  getListOfEntities,
  getListOfSectors,
  getListOfPositions,
} from "@/slices/lists.slice";

const Filters = styled(Flex, {
  columnGap: 12,
  width: "auto",
  input: {
    width: 300,
  },
});

const EmployeeDirectoryAllEmployees = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [list, setList] = useState<Array<Employee>>([]);

  const listOfDepartments = useAppSelector(getListOfDepartments);
  const listOfEntities = useAppSelector(getListOfEntities);
  const listOfSectors = useAppSelector(getListOfSectors);
  const listOfPositions = useAppSelector(getListOfPositions);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    const data = await getEmployeeList();
    setList(data);
    setIsLoading(false);
  };

  return (
    <>
      <section>
        <Flex flexDirection="column" css={{ rowGap: 13 }}>
          <Filters justifyContent="spaceBetween">
            <TextInput
              name="keyword"
              prefix={<Search />}
              placeholder={t("Services.FeaturedServices.SearchPlaceholder")}
            />
            <ToggleGroup />
          </Filters>
          <Filters justifyContent="flexStart">
            <SelectMultiple
              // list={[{ key: "hr", title: "HR Services" }]}
              list={formatForSelect(listOfEntities, "id", "EntityName")}
              title={"Entity"}
              name="entity"
            />
            <SelectMultiple
              list={formatForSelect(listOfSectors, "id", "SectorName")}
              title={"Sectors"}
              name="type"
            />
            <SelectMultiple
              list={formatForSelect(listOfDepartments, "id", "DepartmentName")}
              title={"Departments"}
              name="type"
            />
            <SelectMultiple
              list={formatForSelect(listOfPositions, "id", "PositionTitle")}
              title={"Positions"}
              name="type"
            />
          </Filters>
        </Flex>
      </section>

      {isLoading ? (
        <div>Loading</div>
      ) : (
        <section>
          <div className="row">
            {list?.map((employee: Employee) => (
              <div className="col-xs-12 col-sm-6 col-md-4" key={employee.id}>
                <EmployeeCard data={employee} />
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default EmployeeDirectoryAllEmployees;
