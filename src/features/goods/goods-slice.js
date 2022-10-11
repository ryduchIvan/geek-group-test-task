import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
export const loadGoods = createAsyncThunk(
	"@@goods/load-goods",
	async(_, {rejectWithValue, extra: axios}) =>{
		try {
			const response = await axios.get("https://fakestoreapi.com/products");
			return response;
		} catch (error) {
			return rejectWithValue("Something went wrong. Please reload cite!")
		}
	}
);

const initialState = {
	status:"idle", 
	list: [], 
	error: null,
}

const goodsSlice = createSlice({
	name: "@@goods",
	initialState: initialState,
	reducers: {
		setCurrentGoods: (state, action) =>{
			state.currentGoods = action.payload;
		},
		filteringByAscendingPrices: (state,action)=>{
			const goods = state.list;
			for(let n =0; n < goods.length; n++){
				for(let i =0; i < goods.length - 1 -n; i++){
					if (Math.round(+goods[i].price) > Math.round(+goods[i + 1].price)) {
						let temp = goods[i];
						goods[i] = goods[i + 1];
						goods[i + 1] = temp
					}
				}
			}
		},
		filteringByDecreasingPrices: (state, action) =>{
			const goods = state.list;
			for(let n =0; n < goods.length; n++){
				for(let i =0; i < goods.length - 1 -n; i++){
					if (Math.round(+goods[i].price) < Math.round(+goods[i + 1].price)) {
						let temp = goods[i];
						goods[i] = goods[i + 1];
						goods[i + 1] = temp
					}
				}
			}
		}
	},
	extraReducers: (builder) =>{
		builder.addCase(loadGoods.pending, (state) =>{
			state.status = "loading";
			state.error = null
		})
		builder.addCase(loadGoods.rejected, (state, action) =>{
			state.status = "rejected";
			state.error = action.payload;
		})
		builder.addCase(loadGoods.fulfilled, (state, action) =>{
			state.status = "fuilfilled";
			state.list = action.payload.data;
		})
	}
})

//Reducer
export const goodsReducer = goodsSlice.reducer;
//Actions
export const {setCurrentGoods, filteringByAscendingPrices, filteringByDecreasingPrices} = goodsSlice.actions;
//Select]


export const selectGoods = store => store.goods;
export const filtredGoods = (goods, filter = "", search, firstPrice, secondPrice) =>{
	return goods.filter(good => 
		good.category.slice(0,2).includes(filter.slice(0,2))&& 
		good.title.toLowerCase().includes(search.toLowerCase())&&
		good.price > firstPrice && good.price < secondPrice
		);
}