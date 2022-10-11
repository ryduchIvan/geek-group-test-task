import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	name: "",
	price: {
		firstPirce: 0,
		secondPrice: 1000
	},
	method: ""
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
		},
		setMethod: (state, action) =>{
			state.method = action.payload;
		}
	}
})

//Reducer 
export const searchReducer = searchSlice.reducer;
//Actions
export const {setName , setPrice, setMethod} = searchSlice.actions;
//Select
export const selectSearch = store => store.search;