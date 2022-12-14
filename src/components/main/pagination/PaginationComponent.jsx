//CSS
import "./pagintaion.scss";
//Components
import {Pagination} from "react-bootstrap";
//Hooks
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";
export const PaginationComponent = ({amountGoodsOnPage, totalAmountGoods, category}) =>{
	const {numberOfPage = 1} = useParams();
	const navigate = useNavigate();
	let pageNumbers = [];
	console.log(numberOfPage);
	for(let number = 1 ; number < totalAmountGoods/amountGoodsOnPage+1; number++){
		pageNumbers.push(
				<Pagination.Item as="<a>" href="#goods-box"  className={`main__pagination-number ${+numberOfPage=== number && "active"}`} key={number}
					onClick={() =>{
					category ? navigate(`/goods/${category}/path/${number}`) : navigate(`/goods/path/${number}`)
					}}
				>
					{number}
				</Pagination.Item>
		)
	}
 return(
	<section className="main__pagination-section">
		<a href="#goods-box" onClick={() => {
			category ? navigate(`/goods/${category}/path/${+numberOfPage-1}`) : navigate(`/goods/path/${+numberOfPage-1}`);
		}}>
			<button className="main__pagination-button" disabled={+numberOfPage === 1}>Попередня</button>
		</a>

    	<Pagination className="main__pagination">{pageNumbers}</Pagination>

		<a href="#goods-box" onClick={() => {
			category ? navigate(`/goods/${category}/path/${+numberOfPage+1}`) : navigate(`/goods/path/${+numberOfPage+1}`);
		}}>
			<button className="main__pagination-button" disabled ={+numberOfPage === pageNumbers.length}>Наступна</button>
		</a>
  </section>
 )
}
