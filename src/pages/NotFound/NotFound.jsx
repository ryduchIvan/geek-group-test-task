//CSS
import "./notFound.scss";
import {Link} from "react-router-dom";
function NotFound(params) {
	return(
		<>
		<div className="faker">
		<h1>This Page not found. Please click on button</h1>
			<Link to="/" className="btn-main">Go to home</Link>
		</div>
		</>
	)
}

export {NotFound};