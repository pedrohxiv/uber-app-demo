import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Origin {
  location: { lat: number; lng: number };
  description: string;
}

interface Destination {
  location: { lat: number; lng: number };
  description: string;
}

interface TravelTimeInformation {
  distance: { text: string; value: number };
  duration: { text: string; value: number };
}

export interface NavState {
  origin: Origin | null;
  destination: Destination | null;
  travelTimeInformation: TravelTimeInformation | null;
}

const initialState: NavState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<Origin | null>) => {
      state.origin = action.payload;
    },
    setDestination: (state, action: PayloadAction<Destination | null>) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (
      state,
      action: PayloadAction<TravelTimeInformation | null>
    ) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

export default navSlice.reducer;
