//CSS
import "./mainIndex.scss";
//Components
import {BreadCrumb} from  "./breadcrumb/Breadcrumb";
import { Select } from "./select/Select";
import { GoodsList } from "features/goods/GoodsList";
import { Sidebar } from "features/sidebar/Sidebar";
export const MainIndex = () =>{

	return(
		<main className="main">
			<div className="main__container container-lg">
				<div className="main__breadcrumbs">
					<BreadCrumb/>
				</div>
				<div className="main__title">
					Каталог одягу
				</div>
				<div className="row main__content">
					<aside className="col-12 col-lg-3 main__sidebar">
						<Sidebar/>
					</aside>
					<div className="col-12 col-lg-9 mt-4 mt-lg-0 main__goods">
						<Select/>
						<GoodsList/>
					</div>
				</div>
			</div>
		</main>
	)
}