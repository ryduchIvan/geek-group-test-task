//CSS
import "./burger.scss";
//Components
export const Burger = ({openBurgerMenu}) =>{
	return (
		<section className="header__burger-box" onClick={() =>{
			openBurgerMenu();
		}}>
			<span className="header__burger-stick"/>
		</section>
	)
};