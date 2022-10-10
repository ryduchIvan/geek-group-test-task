//IMG
import Megnifire from "assets/icons/megnifire.svg";
//CSS
import "./search.scss";
//Actions
import {setName, selectSearch} from "./search-slice";
//Instruments
import {useDispatch, useSelector} from "react-redux";
import debounce from "lodash.debounce";
import {useCallback} from "react";
function Search() {
	const dispatch  = useDispatch();
	const {name} = useSelector(selectSearch);
	const onChangeValue = useCallback(debounce((event) =>{
		dispatch(setName(event.target.value));
	}, 250), []);
	return(
		<>
			<input className="header__input" type="text" placeholder="Знайти речі або брнди" defaultValue={name} onChange={onChangeValue}/>
			<img src={Megnifire} alt="" className="header__megnifire" />
		</>
	)//add value from input to store
}

export {Search};