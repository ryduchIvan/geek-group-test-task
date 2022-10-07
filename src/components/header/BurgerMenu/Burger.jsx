//CSS
import "./burger.scss";
//Components
import { BurgerMenu } from "./BurgerMenu.jsx";
export const Burger = ({openBurgerMenu}) =>{
	return (
		<section className="header__burger-box" onClick={() =>{
			openBurgerMenu();
		}}>
			<span className="header__burger-stick"/>
		</section>
	)
}