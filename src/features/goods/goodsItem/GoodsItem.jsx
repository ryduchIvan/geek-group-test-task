//Components
import {Card, Button} from "react-bootstrap";
import Heart from "assets/icons/heart-item.svg";
import Company from "assets/icons/company.svg";
import Location from "assets/icons/location.svg";
//CSS
import "./goodsItem.scss";
//Instrumets
import {useDispatch} from "react-redux";
import { useState } from 'react';
import {useParams} from "react-router-dom";
//Actions
import {addToCart} from "../../cart/cart-slice";
import { Popup } from '../popup/Popup';
import {addToFavorite} from "../../favorite/favorite-slice";
function GoodsItem(props) {
	const [isPopup, setIsPopup] = useState(false);
	const {id, title, price, description, image, category, gridFormat} = props;
	const dispatch = useDispatch();
	const correctTitle = title.slice(0, 20);
	const oldPrice = Math.round( price * 1.25);
	const infoAboutItem ={
		id,
		correctTitle,
		title,
		price,
		image,
		description
	}//I created an object of information about the product in order to further reflect it in the cart , popup and favorite items
	const addToBag = () =>{
		dispatch(addToCart(infoAboutItem))
	}
	const openPopup = () =>{
		setIsPopup(true);
	}
	const closePopup = () =>{
		setIsPopup(false);
	}
	const addToFavoriteItem = () =>{
		dispatch(addToFavorite(infoAboutItem))
	}
	return (
		<div className="col-12 col-sm-6 col-xl-4 goods__item">
			 <Card>
				<div className="goods__img">
					<Card.Img variant="top" src={image} />
					<img src={Heart} alt="" className="goods__heart" onClick={addToFavoriteItem} />
					{
					id ===  1 || id ===2 ? <div className="goods__marker">ТОП</div>: ""
					}
				</div>
     		 <Card.Body className="p-0 mt-3">
				<div className="goods__category">{category}</div>
				{
					title && title.length === correctTitle.length ? <Card.Title>{title}</Card.Title>: <Card.Title>{correctTitle}...</Card.Title>
				}
				 <div className="goods__info">
					<div className="row">
					<div className="goods__info-prices col-6">
						<div className="goods__price-old">{oldPrice}</div>
						<div className="goods__price-new">{price}</div>
					</div>
					<div className="goods__info-other col-6">
						<div className="goods__location">
							<img src={Location} alt="" className="goods__location-img" />
							<div className="goods__location-text">
								Хмельницький
							</div>
						</div>
						<div className="goods__company">
							<img src={Company} alt="" className="goods__company-img " />
							<div className="goods__company-text">
								Calvin Klein
							</div>
						</div>
					</div>
					</div>
				 </div>
     		 </Card.Body>
			 </Card>
		</div>
	)
}

export {GoodsItem};




//return(
//	<>
//		<div className={gridFormat === 4 ? "catalog__item" : "catalog__item catalog__item_big"}>
//			<div className="item__img_box">
//			<img className="item__img" src={image} alt="item img" />
//			<div className="item__opened__popup" onClick={openPopup}>
//				<button className='item__btn__popup'>Watch more</button>
//			</div>
//			</div>
//			<div className="item__title">
//			{title === correctTitle ? <p>{title}</p> : <p>{correctTitle}...</p>}
//			</div>
//			<button className="item__btn btn" onClick={addToBag}>
//			Add to cart
//			</button>
//			<div className="item__price">
//			{price} usd
//				<img src={Heart} alt="heart" className="item__favorite_img" onClick={addToFavoriteItem} />
//			</div>
//		</div>
//		{
//			isPopup && <Popup infoAboutItem={infoAboutItem} closePopup={closePopup}/> 
//		}
//	 </>//I passed inforamtion about item , function which close popup, and popup`s status for css class
//)