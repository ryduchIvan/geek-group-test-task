//CSS
import "nouislider/distribute/nouislider.css";
import "./filterPrice.scss";
//Components
import {Accordion} from "react-bootstrap";
import Nouislider from "nouislider-react";
export const FilterPrice = () =>{
	return( <Accordion defaultActiveKey="0">
	<Accordion.Item eventKey="0">
	  <Accordion.Header>Ціна</Accordion.Header>
	  <Accordion.Body>	
	  <Nouislider range={{ min: 0, max: 500 }} start={[20, 80]} connect />
		<div className="row mt-5 sidebar__price">
			<div className="col-6 sidebar__price-item">
				<span className="sidebar__price-text">Від</span>
				<input type="text" min="0" max="500" className="col sidebar__price-input" />
			</div>
			<div className="col-6 sidebar__price-item">
				<span className="sidebar__price-text">До</span>
				<input type="text" min="0" max="500" className="col sidebar__price-input" />
			</div>
		</div>
	  </Accordion.Body>
	</Accordion.Item>
  </Accordion>
	)
}