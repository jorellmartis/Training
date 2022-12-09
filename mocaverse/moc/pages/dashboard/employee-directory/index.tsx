import { useEffect } from "react";
import Breadcrumb from "@/components/UIKit/Breadcrumb";
import t from "@/utils/t";
import EmployeeDirectoryAllEmployees from "@/components/Elements/Containers/EmployeeDirectoryAllEmployees";
import { useAppDispatch, useAppSelector } from "@/reduxHooks";
import {
  getListOfDepartments,
  getListOfEntities,
  getListOfSectors,
  getListOfPositions,
  setListOfDepartments,
  setListOfEntities,
  setListOfSectors,
  setListOfPositions,
} from "@/slices/lists.slice";

import {
  getDepartments,
  getEntities,
  getPositions,
  getSectors,
} from "@/api/common";

const EmployeeDirectory = () => {
  const listOfDepartments = useAppSelector(getListOfDepartments);
  const listOfEntities = useAppSelector(getListOfEntities);
  const listOfSectors = useAppSelector(getListOfSectors);
  const listOfPositions = useAppSelector(getListOfPositions);

  const dispatch = useAppDispatch();

  useEffect(() => {
    getListings();
  }, []);

  const getListings = async () => {
    if (!listOfDepartments.length) {
      const list = await getDepartments();
      dispatch(setListOfDepartments(list));
    }
    if (!listOfEntities.length) {
      const list = await getEntities();
      dispatch(setListOfEntities(list));
    }
    if (!listOfSectors.length) {
      const list = await getSectors();
      dispatch(setListOfSectors(list));
    }
    if (!listOfPositions.length) {
      const list = await getPositions();
      dispatch(setListOfPositions(list));
    }
  };

  return (
    <>
      <Breadcrumb
        title={t("EmployeeDirectory.AllEmployees")}
        trail={[
          {
            title: t("EmployeeDirectory.SidebarTitle"),
            link: "/dashboard/employee-directory",
          },
          { title: t("EmployeeDirectory.AllEmployees") },
        ]}
      />
      <EmployeeDirectoryAllEmployees />
    </>
  );
};

export default EmployeeDirectory;
