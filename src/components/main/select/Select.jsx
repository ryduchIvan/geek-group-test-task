import Form from 'react-bootstrap/Form';
import "./select.scss";
export const Select = () =>{


	return (
		<div className="main__select">
			<div className="main__select-title">
				Сортувати за: 
			</div>
			<Form.Select  aria-label="Default select example">
				<option>За замовчуваням</option>
				<option value="1">One</option>
				<option value="2">Two</option>
				<option value="3">Three</option>
	 		</Form.Select>
		</div>
	)
}