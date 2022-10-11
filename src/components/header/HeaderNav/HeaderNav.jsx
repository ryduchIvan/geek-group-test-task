//SCSS
import "./headerNav.scss";
import {Link} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";
export const HeaderNav = () =>{

	return(
		<Navbar className="d-none d-xl-flex">
			<Nav className="me-auto">
			  <Nav.Link>
					<Link to="/" className="header__link-route">Головна</Link>
			  </Nav.Link>
			  <Nav.Link>
					<Link to="/" className="header__link-route">Каталог</Link>
			  </Nav.Link>
			  <Nav.Link>
					<Link to="/" className="header__link-route">Жінкам</Link>
			  </Nav.Link>
			  <Nav.Link>
					<Link to="/" className="header__link-route">Чоловікам</Link>
			  </Nav.Link>
			  <Nav.Link>
					<Link to="/" className="header__link-route">Дитячі речі</Link>
			  </Nav.Link>
			  <Nav.Link>
					<Link to="/" className="header__link-route">Бренди</Link>
			  </Nav.Link>
			  <Nav.Link>
					<Link to="/*" className="header__link-route">Акції</Link>
			  </Nav.Link>
			  <Nav.Link>
					<Link to="/*" className="header__link-route">Аутетифікація</Link>
			  </Nav.Link>
			  <Nav.Link>
					<Link to="/*" className="header__link-route">Головна</Link>
			  </Nav.Link>
			  <Nav.Link>
					<Link to="/*" className="header__link-route">блог</Link>
			  </Nav.Link>
			</Nav>
	  </Navbar>
		  )
};



//className="justify-content-end flex-grow-1 pe-3"
//className="justify-content-end flex-grow-1 pe-3"