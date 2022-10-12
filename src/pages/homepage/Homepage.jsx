//CSS
import "./homepage.scss";
import {Link} from "react-router-dom";
function Homepage(params) {
	return(
		<main className="main">
			<div className="main__container">
				<img src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/august-2022/2022_unihp_desktop.jpg" alt="cover"
				className="main__cover"
				/>
				<div className="main__text">
					<Link to="/goods" className="main__btn btn-main">До каталогу</Link>
				</div>
			</div>
		</main>
	)
}

export {Homepage};