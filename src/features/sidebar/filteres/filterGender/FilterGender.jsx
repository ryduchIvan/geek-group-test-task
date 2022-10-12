import {useNavigate} from "react-router-dom";
//Components
import {Accordion} from "react-bootstrap";
//CSS
import "./filterGender.scss";
export const FilterGender = () => {
	const navigate = useNavigate();
	return (
		<Accordion defaultActiveKey="0" className="sidebar__accordion">
		<Accordion.Item eventKey="0" className="sidebar__accordion-item">
		  <Accordion.Header>Стать</Accordion.Header>
		  <Accordion.Body >
			<div className="sidebar__gender">
			<label className="sidebar__category-laber label" onClick={() =>{
					navigate("/goods");
				}}>
					<input type="radio" name="gender" className="sidebar__checkbox checkbox" />
					<span className="custom-checkbox"></span>
					Всі
			</label>
			<label className="sidebar__category-laber label" onClick={() =>{
				navigate("/goods/women's clothing")
			}}>
					<input type="radio" name="gender" className="sidebar__checkbox checkbox" />
					<span className="custom-checkbox"></span>
					Жінкам
				</label>
			<label className="sidebar__category-laber label" onClick={() =>{
				navigate("/goods/men's clothing")
			}}>
					<input type="radio" name="gender" className="sidebar__checkbox checkbox" />
					<span className="custom-checkbox"></span>
					Чоловікам
			</label>
			</div>
		  </Accordion.Body>
		</Accordion.Item>
	  </Accordion>
	)
}