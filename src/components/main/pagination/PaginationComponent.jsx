//CSS
import "./pagintaion.scss";
//Components
import {Pagination} from "react-bootstrap";
//Hooks
import {useState} from "react";
import {useNavigate} from "react-router-dom";
export const PaginationComponent = ({amountGoodsOnPage, totalAmountGoods, category}) =>{
	const [active, setActive] = useState(1);
	let pageNumbers = [];
	const navigate = useNavigate();
	for(let number = 1 ; number < totalAmountGoods/amountGoodsOnPage+1; number++){
		pageNumbers.push(
			<Pagination.Item key={number} active={number === active} onClick={() =>{
				category ? navigate(`/goods/${category}/path/${number}`) : navigate(`/goods/path/${number}`)
				setActive(number)}
				}>
				{number}
		</Pagination.Item>,
		)
	}
 return(
	<div>
    	<Pagination>{pageNumbers}</Pagination>
  </div>
 )
}
