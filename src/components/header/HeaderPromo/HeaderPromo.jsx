//SCSS
import "./headerPromo.scss";
//Icons
import Dress from "assets/icons/dress.svg";
import Like from "assets/icons/like.png";
export const HeaderPromo = () =>{

	return(
		<div className="header__promo">
			<div className="header__promo-content">
				<img src={Like} className="header__promo-img" alt="like" />
				<img src={Dress} className="header__promo-img" alt="dress"/>
				<div className="header__promo-title">
					Брендовий верхній одяг від 899 грн
				</div>
			</div>
		</div>
	)
}