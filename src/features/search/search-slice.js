import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	name: "",
	price: {
		firstPirce: 0,
		secondPrice: 1000
	}
}

const searchSlice = createSlice({
	name: "@@search",
	initialState,
	reducers: {
		setName: (state, action) =>{
			state.name = action.payload;
			return state;
		},
		setPrice: (state, action) =>{
			state.price.firstPirce = +action.payload[0];
			state.price.secondPrice = +action.payload[1];
		}
	}
})

//Reducer 
export const searchReducer = searchSlice.reducer;
//Actions
export const {setName , setPrice} = searchSlice.actions;
//Select
export const selectSearch = store => store.search;