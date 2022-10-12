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
					<Link to="/goods" className="w-500 main__btn btn-main">До каталогу</Link>
			</div>
		</main>
	)
}

export {Homepage};