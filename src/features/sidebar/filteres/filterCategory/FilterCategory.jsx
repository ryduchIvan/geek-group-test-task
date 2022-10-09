//Components
import {Accordion} from "react-bootstrap";
//CSS
import "./filterCategory.scss";
export const FilterCategory = () => {

	return (
		<Accordion defaultActiveKey="0">
		<Accordion.Item eventKey="0">
		  <Accordion.Header>Категорії</Accordion.Header>
		  <Accordion.Body>
			<div className="sidebar__category">
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
				<label className="sidebar__category-laber label">
					<input type="checkbox" className="sidebar__checkbox checkbox" />
					<span className="custom-checkbox"></span>
					Аксесуари
				</label>
				<label className="sidebar__category-laber label">
					<input type="checkbox" className="sidebar__checkbox checkbox" />
					<span className="custom-checkbox"></span>
					Для компютера
				</label>
			</div>
		  </Accordion.Body>
		</Accordion.Item>
	  </Accordion>
	)
}


