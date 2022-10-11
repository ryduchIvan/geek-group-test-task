//CSS
import "./goods.scss";
//Instrumets
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
//Icons
import Preload from "../../assets/icons/preload.svg";
//Actions
import {loadGoods} from "./goods-slice";
import {filteringByAscendingPrices, filteringByDecreasingPrices} from "./goods-slice";
//Select
import {selectGoods} from "./goods-slice";
import { filtredGoods } from "./goods-slice";
import { selectSearch } from "../search/search-slice";
//Components
import {GoodsItem} from "./goodsItem/GoodsItem";
import {PaginationComponent} from "../../components/main/pagination/PaginationComponent";
function GoodsList() {
	//const [grid , setGrid] = useState(4);
	const [amountGoodsOnPage, setAmountGoodsOnPage] = useState(9);
	const [gridFormat, setGridFormat] = useState(4);
	const {category, numberOfPage = 1} = useParams();//get url
	const dispatch = useDispatch();
	const {status, list, error} = useSelector(selectGoods);//get goods object
	const {name, price , method} = useSelector(selectSearch);//get search from store
	const filtredGoodsByPrice = (list,method) =>{
		if(method === "priceUp"){
			dispatch(filteringByAscendingPrices());
		}
		 else if (method === "priceDown") {
			dispatch(filteringByDecreasingPrices());
		}
		return list
	}
	//create a filtered list,
	//// the first parameter is the goods,
	//// the second category of goods
	//// the third is search from input
	let filteredList = filtredGoods(filtredGoodsByPrice(list, method), category,name, price.firstPirce, price.secondPrice);
	useEffect(() =>{
		dispatch(loadGoods())
	},[numberOfPage, category, dispatch]);
	 //Functions for handle grid`s format 
	//Pagination
	const lastGoodsIndex = numberOfPage * amountGoodsOnPage;
	const firstGoodsIndex = lastGoodsIndex - amountGoodsOnPage;
	const paginationGoods = filteredList.slice(firstGoodsIndex, lastGoodsIndex);

	const setFourWayOfGrid = () =>{
		setGridFormat(4)
	}
	const setTwoWayOfGrid = () =>{
		setGridFormat(2);
	}
	return(
		<>
		<div className="goods__box" id="goods-box">
			<div className="row goods__list">
				{
					status === "loading" && <img src={Preload} alt="preload" className="goods__preload" />
				}
				{
					status === "rejected" && <p className="error">{error}</p>	
				}
				{
					status === "fuilfilled" && paginationGoods.map((good) => <GoodsItem key={good.id} {...good} gridFormat={gridFormat} />)
				}
				
			</div>
		</div>
		{
			status === "fuilfilled" && <PaginationComponent category={category} amountGoodsOnPage={amountGoodsOnPage} totalAmountGoods={filteredList.length}/>
		}
		</>
	)
}

export {GoodsList};



