//CSS
import "./burgerMenu.scss";
//Components
import { Search } from "features/search/Search.jsx";
import { useRef } from "react";
import {Link} from "react-router-dom";
export const BurgerMenu = ({status, closeBurgerMenu}) =>{
	const handleBurgerMenu =(event) =>{
		if (event.target.classList.contains("header__mobile")) {
			closeBurgerMenu();
		}
	}
	return (
		<section className={`${status ? "header__mobile show": "header__mobile"}`}  onClick={handleBurgerMenu}>
			<div className="header__mobile-content">
				<div className="header__mobile-search">
					<Search/>
				</div>
				<ul className="header__mobile-list">
					<li className="header__mobile-link">
						<Link to="/" className="header__mobile-route">Головна</Link>
					</li>
					<li className="header__mobile-link">
						<Link to="/goods" className="header__mobile-route">Каталог</Link>
					</li>
					<li className="header__mobile-link">
						<Link to="/goods/women's clothing" className="header__mobile-route">Жінкам</Link>
					</li>
					<li className="header__mobile-link">
						<Link to="/goods/men's clothing" className="header__mobile-route">Чоловікам</Link>
					</li>
					<li className="header__mobile-link">
						<Link to="/goods/jewelery" className="header__mobile-route">Аксесуари</Link>
					</li>
					<li className="header__mobile-link">
						<Link to="/goods/electronics" className="header__mobile-route">Для компютера</Link>
					</li>
					<li className="header__mobile-link">
						<Link to="/*" className="header__mobile-route">Бренди</Link>
					</li>
					<li className="header__mobile-link">
						<Link to="/*" className="header__mobile-route">Аутентифікація</Link>
					</li>
					<li className="header__mobile-link">
						<Link to="/*" className="header__mobile-route">Акції</Link>
					</li>
				</ul>
			</div>
		</section>
	)
}