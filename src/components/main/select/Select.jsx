//Hooks
import {useDispatch, useSelector} from "react-redux";
//Actions
import {filteringByAscendingPrices, filteringByDecreasingPrices} from "../../../features/goods/goods-slice";
import Form from 'react-bootstrap/Form';
import "./select.scss";
export const Select = () =>{
	const dispatch = useDispatch();
	const setFilterMethod = (value) =>{
		if (value === "priceUp") {
			dispatch(filteringByAscendingPrices())
		} else if (value === "priceDown"){
			dispatch(filteringByDecreasingPrices())
		}
	}
	return (
		<div className="main__select">
			<div className="main__select-title">
				Сортувати за: 
			</div>
			<Form.Select onChange={(event) => setFilterMethod(event.target.value)} aria-label="Default select example">
				<option>За новизною</option>
				<option value="priceUp">Від дешевих к дорогим</option>
				<option value="priceDown">Від дорогих к дешевим</option>
	 		</Form.Select>
		</div>
	)
}