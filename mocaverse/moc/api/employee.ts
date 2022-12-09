import { fetchAPI } from "@/utils/fetch";

export const getEmployeeList = async () => {
  const response = await fetchAPI(`/api/users`, {
    fields: [
      "EmployeeName",
      "EmployeeSlug",
      "EmployeeWorkStatus",
      "email",
      "EmployeePhoneNumber",
      "EmployeeMOCAPhoneNumber",
    ],
    populate: {
      EmployeeDepartment: {
        fields: ["DepartmentCode", "DepartmentName", "DepartmentUID", "locale"],
      },
      EmployeePosition: {
        fields: ["PositionTitle", "PositionUID", "PositionCode", "locale"],
      },
    },
  });

  return response;
};
