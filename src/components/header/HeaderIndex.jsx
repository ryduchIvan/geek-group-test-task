import Heart from  "../../assets/img/heart.svg"
import ShopLogo from "../../assets/img/Shop.svg";
import ShopingCart from "../../assets/img/shopping-cart-svgrepo-com.svg";
//CSS
import "./headerIndex.scss";
//Components
import {CartList} from "../../features/cart/CartList";
import { HeaderPromo } from "./HeaderPromo/HeaderPromo";
import {HeaderMain} from "./HeaderMain/HeaderMain";
import {HeaderNav} from "./HeaderNav/HeaderNav";
//Select
import {selectCart} from "../../features/cart/cart-slice";
//Instruments
import { useState } from "react";
import {useSelector} from "react-redux";
import { FavoriteList } from "../../features/favorite/FavoriteList";
import { selectFavorite } from "../../features/favorite/favorite-slice";
export const HeaderIndex = () =>{

	return (
		<header className="header">
			<HeaderPromo/>
			<div className="header__container container">
				<HeaderMain/>
				<HeaderNav/>
			</div>
		</header>
	)
}




//const [isCart, setIsCart] = useState(false);
	//const [isFavorite, setIsFavorite] = useState(false);
	//const {items} = useSelector(selectCart);//got a list of products in the cart
	//const favorite = useSelector(selectFavorite);
	//const toggleState = (state, setState) =>{
	//	if (state) {
	//		setState(false)
	//	} else {
	//		setState(true)
	//	}
	//}
	//const closeCart = () =>{
	//	setIsCart(false)
	//}
	//const closeFavorite = () =>{
	//	setIsFavorite(false)
	//}




	//<header className="header">
		//	<div className="header__container container">
		//	<div className="header__row">
		//		<img src={ShopLogo} alt="" className="header__img" />
		//		<div className="header__options">
		//		<div className="header__cart" >
		//			<div className="header__logo">
		//				<img src={ShopingCart} alt="" onClick={() =>{
		//					toggleState(isCart, setIsCart)
		//				}}/>
		//				<span className="header__quantity">{items.length}</span>
		//			</div>
		//			<CartList status={isCart} items={items} closeCart={closeCart}/>
		//		</div>
		//		<div className="header__favorite">
		//			<img src={Heart} alt="heart" className="header__favorite_img" onClick={() =>{
		//			toggleState(isFavorite, setIsFavorite)
		//			}}/>
		//			<div className="favorite__quantity">{favorite.length}</div>
		//		</div>
		//			<FavoriteList status={isFavorite} closeFavorite={closeFavorite} favorite={favorite}/>
		//		</div>
		//	</div>
		//	</div>
		//</header>