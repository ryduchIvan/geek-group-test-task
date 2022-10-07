//CSS
import "./headerNav.scss";
import {Link} from "react-router-dom";
export const HeaderNav = () =>{

	return (
		<nav className="header__nav">
			<ul className="header__list">
				<li className="header__link">
					<Link to="/" className="header__link-route">Головна</Link>
				</li>
				<li className="header__link">
					<Link to="/goods" className="header__link-route">Каталог</Link>
				</li>
				<li className="header__link">
					<Link to="/goods/women's clothing" className="header__link-route">Жінкам</Link>
				</li>
				<li className="header__link">
					<Link to="/goods/men's clothing" className="header__link-route">Чоловікам</Link>
				</li>
				<li className="header__link">
					<Link to="/goods/jewelery" className="header__link-route">Аксесуари</Link>
				</li>
				<li className="header__link">
					<Link to="/goods/electronics" className="header__link-route">Для компютера</Link>
				</li>
				<li className="header__link">
					<Link to="/*" className="header__link-route">Бренди</Link>
				</li>
				<li className="header__link">
					<Link to="/*" className="header__link-route">Акії</Link>
				</li>
				<li className="header__link">
					<Link to="/*" className="header__link-route">Аутентифікація</Link>
				</li>
				<li className="header__link">
					<Link to="/*" className="header__link-route">Блог</Link>
				</li>
			</ul>
		</nav>
	)
}