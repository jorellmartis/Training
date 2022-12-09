import { Department, Entity, Position, Sector } from "@/types/lists";
import { fetchAPI } from "@/utils/fetch";

export const getDepartments = async () => {
  let list: Array<Department> = [];
  const response = await fetchAPI(`/api/departments`, {
    fields: ["DepartmentCode", "DepartmentName", "DepartmentUID", "locale"],
  });
  response?.data?.map((item: { attributes: Department }) => {
    list = [...list, item.attributes];
  });
  return list;
};

export const getEntities = async () => {
  let list: Array<Entity> = [];
  const response = await fetchAPI(`/api/entities`, {
    fields: ["EntityName", "EntitySlug", "locale"],
  });
  response?.data?.map((item: { attributes: Entity }) => {
    list = [...list, item.attributes];
  });
  return list;
};

export const getSectors = async () => {
  let list: Array<Sector> = [];
  const response = await fetchAPI(`/api/sectors`, {
    fields: ["SectorName", "SectorUID", "locale"],
  });
  response?.data?.map((item: { attributes: Sector }) => {
    list = [...list, item.attributes];
  });
  return list;
};

export const getPositions = async () => {
  let list: Array<Position> = [];
  const response = await fetchAPI(`/api/positions`, {
    fields: ["PositionTitle", "PositionUID", "locale"],
  });
  response?.data?.map((item: { attributes: Position }) => {
    list = [...list, item.attributes];
  });
  return list;
};
