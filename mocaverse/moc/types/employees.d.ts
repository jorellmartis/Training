import { Department, Position } from "@/types/lists";

export type Employee = {
  EmployeeName: string;
  EmployeeSlug: string;
  EmployeeWorkStatus: string;
  email: string;
  EmployeePhoneNumber: string;
  EmployeeMOCAPhoneNumber: string;
  EmployeeDepartment: Department;
  EmployeePosition: Position;
  id: number;
};
