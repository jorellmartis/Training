import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/reduxStore";
import { Department, Entity, Position, Sector } from "@/types/lists";

// Define a type for the slice state
interface ListsStateProps {
  ListDepartments: Array<Department>;
  ListEntities: Array<Entity>;
  ListSectors: Array<Sector>;
  ListPositions: Array<Position>;
}

// Define the initial state using that type
const initialState: ListsStateProps = {
  ListDepartments: [],
  ListEntities: [],
  ListSectors: [],
  ListPositions: [],
};

export const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    setListOfDepartments: (state, action: PayloadAction<Array<Department>>) => {
      state.ListDepartments = action.payload;
    },
    setListOfEntities: (state, action: PayloadAction<Array<Entity>>) => {
      state.ListEntities = action.payload;
    },
    setListOfSectors: (state, action: PayloadAction<Array<Sector>>) => {
      state.ListSectors = action.payload;
    },
    setListOfPositions: (state, action: PayloadAction<Array<Position>>) => {
      state.ListPositions = action.payload;
    },
  },
});

// Actions
export const {
  setListOfDepartments,
  setListOfEntities,
  setListOfSectors,
  setListOfPositions,
} = listsSlice.actions;

// Selectors
export const getListOfDepartments = (state: RootState) =>
  state.lists.ListDepartments;

export const getListOfEntities = (state: RootState) => state.lists.ListEntities;

export const getListOfSectors = (state: RootState) => state.lists.ListSectors;

export const getListOfPositions = (state: RootState) =>
  state.lists.ListPositions;

export default listsSlice.reducer;
