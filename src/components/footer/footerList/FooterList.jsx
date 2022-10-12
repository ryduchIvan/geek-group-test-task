//CSS
import "./footerList.scss";
import {Link} from "react-router-dom";

export const FooterList = ({list}) =>{
	return(
		<ul className="text-center text-md-start col-12 col-md-6 col-xl-3 footer__list">
			{
				list.map((link) => <li key={link} className="footer__list-link">
					<Link className="footer__list-route">{link}</Link>
				</li>)
			}
		</ul>
	)
}