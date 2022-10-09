//Components
import { FilterCategory } from "./filteres/filterCategory/FilterCategory";
import { FilterPrice } from "./filteres/filterPrice/FilterPrice";
import { FilterGender } from "./filteres/filterGender/FilterGender";
import {NoActiveFilter} from "./filteres/NoActiveFilter/NoActiveFilter";
//CSS
import "./sidebar.scss";
function Sidebar() {
	return(
		<>
		<div className="sidebar__title">
				Фільтри
			</div>
			<div className="mt-4 sidebar__filter">
				<FilterCategory/>
				<FilterPrice/>
				<NoActiveFilter name="Продавець"/>
				<NoActiveFilter name="Бренд"/>
				<FilterGender/>
				<NoActiveFilter name="Розмір"/>
				<NoActiveFilter name="Колір"/>
				<NoActiveFilter name="Матеріал"/>
				<NoActiveFilter name="Сезон"/>
				<NoActiveFilter name="Стиль"/>
			</div>
			</>
	)
}

export {Sidebar}