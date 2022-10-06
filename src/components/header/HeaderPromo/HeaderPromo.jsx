import "./headerPromo.scss";
//Icons
import Like from "assets/icons/like.png";
import Dress from "assets/icons/dress.svg";
export const HeaderPromo = () =>{

	return (
		<section className="header__promo">
			<div className="header__promo-images">
				<img src={Like} alt="" className="header__promo-image"/>
				<img src={Dress} alt="" className="header__promo-image"/>
			</div>
			<div className="header__promo-title">Брендовий верхній одяг від 899 грн</div>
		</section>
	)
}