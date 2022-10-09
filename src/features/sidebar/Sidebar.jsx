//Components
import {Filter} from "./filter/Filter";
//CSS
import "./sidebar.scss";
function Sidebar() {
	return(
		<aside className="main__sidebar sidebar">
			<div className="sidebar__title">
				Фільтри
			</div>
			<div className="mt-4 sidebar__filter">
				<Filter/>
			</div>
		</aside>
	)
}

export {Sidebar}