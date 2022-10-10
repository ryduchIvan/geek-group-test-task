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
			<div className="row mt-4 sidebar__filter-list">
				<div className="col-6 col-md-4 col-lg-12 sidebar__filter-item">
					<FilterCategory/>
				</div>
				<div className="col-6 col-md-4 col-lg-12 sidebar__filter-item">
					<FilterPrice/>
				</div>
				<div className="col-6 col-md-4 col-lg-12 sidebar__filter-item">
					<NoActiveFilter name="Продавець"/>
				</div>
				<div className="col-6 col-md-4 col-lg-12 sidebar__filter-item">
					<NoActiveFilter name="Бренд"/>
				</div>
				<div className="col-6 col-md-4 col-lg-12 sidebar__filter-item">
					<FilterGender/>
				</div>
				<div className="col-6 col-md-4 col-lg-12 sidebar__filter-item">
					<NoActiveFilter name="Розмір"/>
				</div>
				<div className="col-6 col-md-4 col-lg-12 sidebar__filter-item">
					<NoActiveFilter name="Колір"/>
				</div>
				<div className="col-6 col-md-4 col-lg-12 sidebar__filter-item">
					<NoActiveFilter name="Матеріал"/>
				</div>
				<div className="col-6 col-md-4 col-lg-12 sidebarr__filter-item">
					<NoActiveFilter name="Сезон"/>
				</div>
				<div className="col-6 col-md-4 col-lg-12 sidebar__fitler-item">
					<NoActiveFilter name="Стиль"/>
				</div>
			</div>
		</>
	)
}

export {Sidebar}