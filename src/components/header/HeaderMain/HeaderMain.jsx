//IMG
import HeaderLogo from "assets/img/header-logo.svg";
import Heart from "assets/icons/heart.svg";
import Message from "assets/icons/message.svg";
import Cart from "assets/icons/cart.svg";
import LanguageArrow from "assets/icons/language-arrow.svg";
import Avatar from "assets/img/avatar.png";
//CSS
import "./headerMain.scss";
//Components
import { Search } from "features/search/Search.jsx";
import { FavoriteList } from "features/favorite/FavoriteList";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
//Selectors
import { selectCart } from "features/cart/cart-slice";
import { selectFavorite } from "features/favorite/favorite-slice";
//Hooks
import {useSelector} from "react-redux";
import { useState } from "react";
import { CartList } from "features/cart/CartList";
import { Burger } from "../BurgerMenu/Burger";
export const HeaderMain = () =>{
	const [isCart, setCart] = useState(false);
	const [isFavorite, setFavorite] = useState(false);
	const [isBurgerMenu, setBurgerMenu] = useState(false);
	const {items} = useSelector(selectCart);//got a list of products in the cart
	const favorite = useSelector(selectFavorite);
	const toggleState = (state, setState) =>{
		if (state) {
			setState(false)
		} else {
			setState(true)
		}
	}
	const closeCart = () =>{
		setCart(false)
	}
	const closeFavorite = () =>{
		setFavorite(false)
	}
	const openBurgerMenu = () =>{
		setBurgerMenu(true);
	}
	const closeBurgerMenu = () =>{
		setBurgerMenu(false);
	}
	return (
		<section className="header__main">
			<div className="header__row">
				<div className="header__logo">
					<img src={HeaderLogo} alt="header-logo" />
				</div>
				<div className="header__search">
					<Search/>
				</div>
				<button className="header__btn">Додати товар</button>
				<div className="header__language">
					<span className="header__language-text">
						Укр
					</span>
					<img src={LanguageArrow} alt="arrow" className="header__language-arrow"></img>
				</div>
				<div className="header__features">
					<div className="header__heart header__features-item" onClick={() =>{toggleState(isFavorite, setFavorite)}}>
						<img src={Heart} alt="heart" className="header__heart-img header__icon" />
						<span className="header__quantity-heart quantity">
							{favorite.length}
						</span>
					</div>
					<div className="header__message header__features-item">
						<img src={Message} alt="heart" className="header__message-img header__icon" />
						<span className="header__quantity-message quantity">
							0
						</span>
					</div>
					<div className="header__cart header__features-item" onClick={() =>{toggleState(isCart, setCart)}}>
						<img src={Cart} alt="heart" className="header__cart-img header__icon" />
						<span className="header__quantity-cart quantity">
							{items.length}
						</span>
					</div>
					<div className="header__avatart header__features-item">
						<img src={Avatar} alt="avatar" className="header__avatar-img header__icon" />
						<img src={LanguageArrow} alt="arrow" className="header__avatar-arrow" />
					</div>
					<div className="header__burger header__features-item">
						<Burger openBurgerMenu={openBurgerMenu}/>
					</div>
				</div>
			</div>
			<BurgerMenu status={isBurgerMenu} closeBurgerMenu={closeBurgerMenu}/>
			<FavoriteList status={isFavorite} closeFavorite={closeFavorite} favorite={favorite}/>
			<CartList status={isCart} closeCart={closeCart} items={items}/>
		</section>
	)
}