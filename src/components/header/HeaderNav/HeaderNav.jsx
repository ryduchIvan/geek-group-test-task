//SCSS
import "./headerNav.scss";
import {Link} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";
export const HeaderNav = () =>{

	return(
		<Navbar className="d-none d-xl-flex header__navbar">
			<Nav className="me-auto header__navbar-nav">
			  <Nav.Link>
					<Link to="/" className="header__link-route">Головна</Link>
			  </Nav.Link>
			  <Nav.Link>
					<Link to="/goods" className="header__link-route">Каталог</Link>
			  </Nav.Link>
			  <Nav.Link>
					<Link to="/goods/women's clothing" className="header__link-route">Жінкам</Link>
			  </Nav.Link>
			  <Nav.Link>
					<Link to="/goods/men's clothing" className="header__link-route">Чоловікам</Link>
			  </Nav.Link>
			  <Nav.Link>
					<Link to="/goods/jewelery" className="header__link-route">Аксесуари</Link>
			  </Nav.Link>
			  <Nav.Link>
					<Link to="/goods/electronics" className="header__link-route">Для компютера</Link>
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


