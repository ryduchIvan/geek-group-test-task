//Hooks
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
//Selector
import { selectSearch } from "features/search/search-slice";
//Actions

import { setMethod } from "features/search/search-slice";
import Form from 'react-bootstrap/Form';
import "./select.scss";
export const Select = () =>{
	const dispatch = useDispatch();
	const setFilterMethod = (value) =>{
		dispatch(setMethod(value));
	}
	return (
		<div className="main__select">
			<div className="main__select-title">
				Сортувати за: 
			</div>
			<Form.Select onChange={(event) => setFilterMethod(event.target.value)} aria-label="Default select example" className="main__select-form">
				<option value="default">За новизною</option>
				<option value="priceUp">Від дешевих к дорогим</option>
				<option value="priceDown">Від дорогих к дешевим</option>
	 		</Form.Select>
		</div>
	)
}