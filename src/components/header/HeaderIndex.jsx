//Componenets
import { HeaderMain } from "./headerMain/HeaderMain"
import { HeaderNav } from "./headerNav/HeaderNav"
import { HeaderPromo } from "./headerPromo/HeaderPromo"

export const HeaderIndex = () =>{

	return(
		<header className="header">
			<HeaderPromo/>
			<div className="header__container container-lg">
				<HeaderMain/>
				<HeaderNav/>
			</div>
		</header>
	)
}