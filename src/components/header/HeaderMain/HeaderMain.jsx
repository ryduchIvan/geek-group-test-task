//CSS
import "./headerMain.scss";
//Hooks
import {useSelector} from "react-redux";
import { useState } from "react";
//selector
import { selectFavorite } from "features/favorite/favorite-slice";
import { selectCart } from "features/cart/cart-slice";
//Icons
import Heart from "assets/icons/heart.svg";
import Cart from "assets/icons/cart.svg";
import Avatar from "assets/img/avatar.png";
import Message from "assets/icons/message.svg";
import Arrow from "assets/icons/arrow.svg";
import HeaderLogo from "assets/img/header-logo.svg";
import {Form} from "react-bootstrap";
import { Search } from "features/search/Search";
//Components
import { CartList } from "features/cart/CartList";
import { FavoriteList } from "features/favorite/FavoriteList";
import { BurgerMenu } from "../burgerMenu/BurgerMenu";
import { Burger } from "../burger/Burger";
export const HeaderMain = () =>{
	const [isCart, setCart] = useState(false);//made state for handle cart 
	const [isFavorite, setFavorite] = useState(false);//made state for handle favorite items 
	const [isBurgerMenu, setBurgerMenu] = useState(false);//made state for handle burger
	const favorite = useSelector(selectFavorite);
	const {items} = useSelector(selectCart);
	const toggle = (state, setState) =>{
		setState(!state);
	}
	const closeCart = () =>{
		setCart(false);
	}
	const closeFavorite = () =>{
		setFavorite(false);
	}
	const openBurgerMenu = () =>{
		setBurgerMenu(true);
	}
	const closeBurgerMenu = () =>{
		setBurgerMenu(false);
	}
	return (
		<nav className="header__main">
			<div className="header__logo">
				<img src={HeaderLogo} alt="header__logo" />
			</div>
			<div className="d-none d-xl-block header__search">
				<Search/>
			</div>
			<button className="d-none d-xl-flex header__btn">Додати товар</button>
			<Form.Select className="d-none d-xl-block header__select">
      			<option value="1">Укр</option>
      			<option value="2">Пол</option>
     			<option value="3">Англ</option>
    		</Form.Select>
			<div className="header__features">
				<div className="header__features-item" onClick={() =>{
						toggle(isFavorite, setFavorite);
				}}> 
					<img src={Heart} alt="" className="header__features-img"  />
					<span className="quintity">{favorite.length}</span>
				</div>
				<div className="header__features-item">
					<img src={Message} alt="" className="header__features-img" />
					<span className="quintity orange">0</span>
				</div>
				<div className="header__features-item"onClick={() =>{
					toggle(isCart, setCart);
				}}>
					<img src={Cart} alt="" className="header__features-img" />
					<span className="quintity">{items.length}</span>
				</div>
				<div className="header__features-item header__features-avatar">
					<img src={Avatar} alt="" className="header__features-img" />
					<img src={Arrow} alt="arrow" />
				</div>
				<div className="d-block d-xl-none header__burger header__features-item">
					<Burger openBurgerMenu={openBurgerMenu}/>
				</div>
			</div>
			<BurgerMenu status={isBurgerMenu} closeBurgerMenu={closeBurgerMenu}/>
			<CartList status={isCart} items={items} closeCart={closeCart} />
			<FavoriteList status={isFavorite} items={favorite} closeFavorite={closeFavorite} />
		</nav>
	)
}