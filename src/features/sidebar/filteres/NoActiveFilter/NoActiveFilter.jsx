//Components
import {Accordion} from "react-bootstrap";
//CSS
export const NoActiveFilter= ({name}) => {

	return (
		<Accordion defaultActiveKey="0">
		<Accordion.Item eventKey="0">
		  <Accordion.Header>{name}</Accordion.Header>
		</Accordion.Item>
	  </Accordion>
	)
}