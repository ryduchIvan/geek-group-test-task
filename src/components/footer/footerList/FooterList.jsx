//CSS
import "./footerList.scss";
import {Link} from "react-router-dom";

export const FooterList = ({list}) =>{
	return(
		<ul className="footer__list">
			{
				list.map((link) => <li key={link} className="footer__list-link">
					<Link className="footer__list-route">{link}</Link>
				</li>)
			}
		</ul>
	)
}