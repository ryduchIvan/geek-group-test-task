//Components
import {Accordion} from "react-bootstrap";
//CSS
export const NoActiveFilter= ({name}) => {

	return (
		<Accordion defaultActiveKey="0" className="sidebar__accordion">
		<Accordion.Item eventKey="0"className="sidebar__accordion-item">
		  <Accordion.Header>{name}</Accordion.Header>
		</Accordion.Item>
	  </Accordion>
	)
}