import Form from 'react-bootstrap/Form';
import "./select.scss";
export const Select = () =>{


	return (
		<div className="main__select">
			<div className="main__select-title">
				Сортувати за: 
			</div>
			<Form.Select  aria-label="Default select example">
				<option>За новизною</option>
				<option value="1">Від дешевих к дорогим</option>
				<option value="2">Від дорогих к дешевим</option>
	 		</Form.Select>
		</div>
	)
}