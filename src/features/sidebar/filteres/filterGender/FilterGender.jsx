//Components
import {Accordion} from "react-bootstrap";
//CSS
import "./filterGender.scss";
export const FilterGender = () => {

	return (
		<Accordion defaultActiveKey="0">
		<Accordion.Item eventKey="0">
		  <Accordion.Header>Стать</Accordion.Header>
		  <Accordion.Body>
			<div className="sidebar__gender">
			<label className="sidebar__category-laber label">
					<input type="checkbox" className="sidebar__checkbox checkbox" />
					<span className="custom-checkbox"></span>
					Жінкам
				</label>
			<label className="sidebar__category-laber label">
					<input type="checkbox" className="sidebar__checkbox checkbox" />
					<span className="custom-checkbox"></span>
					Чоловікам
			</label>
			</div>
		  </Accordion.Body>
		</Accordion.Item>
	  </Accordion>
	)
}