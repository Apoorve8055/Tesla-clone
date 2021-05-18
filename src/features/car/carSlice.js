import { createSlice } from "@reduxjs/toolkit";
import carData from "../../carInfo.json";

const initialState = {
    cars:carData
}

const carSlice = createSlice({
    name:"car",
    initialState,
    reducers:{},
});


export const selectCars = state => state.car.cars;
export const { setCarDetails } = carSlice.actions;
export default carSlice.reducer;