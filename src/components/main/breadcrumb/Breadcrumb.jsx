//CSS
import "./breadcrumb.scss";
import {Breadcrumb} from "react-bootstrap";
import {Link} from "react-router-dom";
export const BreadCrumb = () =>{
	return(
		<>
		<Breadcrumb>
			<Breadcrumb.Item>
			<Link to="/" className="breadcrumb__item-route">
					Головна
			</Link>
			</Breadcrumb.Item>
			<Breadcrumb.Item active>Каталог одягу</Breadcrumb.Item>
	  	</Breadcrumb>
		</>
	)
}