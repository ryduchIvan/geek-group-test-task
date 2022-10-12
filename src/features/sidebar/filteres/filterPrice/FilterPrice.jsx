//CSS
import "nouislider/distribute/nouislider.css";
import "./filterPrice.scss";
//Hooks
import { useState} from "react";
import {useDispatch} from "react-redux";
//Actions
import { setPrice } from "features/search/search-slice";
//Components
import {Accordion} from "react-bootstrap";
import Nouislider from "nouislider-react";
export const FilterPrice = () =>{
	const [firstPrice, setFirstPrice] = useState(20);
	const [secondPrice, setSecondPrice] = useState(80);
	const dispatch = useDispatch();
	const handleFirstInputValue = (value) =>{
		setFirstPrice(value)
	};
	const handleSecondInputValue = (value) =>{
		setSecondPrice(value)
	};
	return(
		 <Accordion defaultActiveKey="0" className="sidebar__accordion">
			<Accordion.Item eventKey="0" className="sidebar__accordion-item">
	  			<Accordion.Header>Ціна</Accordion.Header>
	  			<Accordion.Body >	
	  			<Nouislider range={{ min: 0, max: 1000 }} start={[0, 1000]} connect onUpdate={(event) =>{
				handleFirstInputValue(Math.round(event[0]));
				handleSecondInputValue(Math.round(event[1]));}} onSet={(event) =>{dispatch(setPrice(event))}}/>
				<div className="row mt-5 sidebar__price">
					<div className="col-6 sidebar__price-item">
						<span className="sidebar__price-text">Від</span>
						<input type="text" min="0" max="500" className="col sidebar__price-input" value={firstPrice} disabled/>
				</div>
				<div className="col-6 sidebar__price-item">
					<span className="sidebar__price-text">До</span>
					<input type="text" min="0" max="500" className="col sidebar__price-input" value={secondPrice} disabled/>
				</div>
			</div>
	  </Accordion.Body>
	</Accordion.Item>
  </Accordion>
	)
}