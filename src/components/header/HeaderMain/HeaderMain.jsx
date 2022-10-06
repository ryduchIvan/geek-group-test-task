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
export const HeaderMain = () =>{

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
					<div className="header__heart header__features-item">
						<img src={Heart} alt="heart" className="header__heart-img header__icon" />
						<span className="header__quantity-heart quantity">0</span>
					</div>
					<div className="header__message header__features-item">
						<img src={Message} alt="heart" className="header__heart-img header__icon" />
						<span className="header__quantity-message quantity">0</span>
					</div>
					<div className="header__cart header__features-item">
						<img src={Cart} alt="heart" className="header__heart-img header__icon" />
						<span className="header__quantity-cart quantity">0</span>
					</div>
					<div className="header__avatart header__features-item">
						<img src={Avatar} alt="avatar" className="header__avatar-img header__icon" />
						<img src={LanguageArrow} alt="arrow" className="header__avatar-img" />
					</div>
				</div>
			</div>
		</section>
	)
}