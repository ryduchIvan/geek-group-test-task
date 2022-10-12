//CSS
import "./homepage.scss";
import {Link} from "react-router-dom";

function Homepage(params) {
	return(
		<main className="main">
			<img src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/august-2022/2022_unihp_desktop.jpg" alt="cover"
			className="main__cover"
			/>
			<div className="main__container container">
				<Link to="/goods" className="main__btn btn-main">Go to catalog</Link>
			</div>
		</main>
	)
}

export {Homepage};