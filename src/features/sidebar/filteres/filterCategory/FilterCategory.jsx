import {useNavigate} from "react-router-dom";
//Components
import {Accordion} from "react-bootstrap";
//CSS
import "./filterCategory.scss";
export const FilterCategory = () => {
	const navigate = useNavigate();
	return (
		<Accordion defaultActiveKey="0" className="sidebar__accordion">
		<Accordion.Item eventKey="0" className="sidebar__accordion-item">
		  <Accordion.Header>Категорії</Accordion.Header>
		  <Accordion.Body>
			<div className="sidebar__category">
			<label className="sidebar__category-laber label" onClick={() =>{
					navigate("/goods");
				}}>
					<input type="radio" name="category" className="sidebar__checkbox checkbox" />
					<span className="custom-checkbox"></span>
					Всі
				</label>
				<label className="sidebar__category-laber label" onClick={() =>{
					navigate("/goods/women's clothing");
				}}>
					<input type="radio" name="category" className="sidebar__checkbox checkbox" />
					<span className="custom-checkbox"></span>
					Жінкам
				</label>
				<label className="sidebar__category-laber label">
					<input type="radio" name="category" className="sidebar__checkbox checkbox" onClick={() =>{
					navigate("/goods/men's clothing");
				}} />
					<span className="custom-checkbox"></span>
					Чоловікам
				</label>
				<label className="sidebar__category-laber label" onClick={() =>{
					navigate("/goods/jewelery");
				}}>
					<input type="radio" name="category" className="sidebar__checkbox checkbox" onClick={()=>{
						navigate("/goods/electronics");
					}} />
					<span className="custom-checkbox"></span>
					Аксесуари
				</label>
				<label className="sidebar__category-laber label" onClick={() =>{
					navigate("/goods/electronics");
				}}>
					<input type="radio" name="category" className="sidebar__checkbox checkbox" />
					<span className="custom-checkbox"></span>
					Для компютера
				</label>
			</div>
		  </Accordion.Body>
		</Accordion.Item>
	  </Accordion>
	)
}


