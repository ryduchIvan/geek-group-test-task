//CSS
import "./global.scss";
//Instruments
import {Route, Routes} from "react-router-dom";
//Components
import {HeaderIndex} from "./components/header/HeaderIndex";
import { Footer } from "./components/footer/Footer";
import {Homepage} from "./pages/homepage/Homepage";
//import { GoodsList } from "./features/goods/GoodsList";
import { Catalog } from "./pages/catalog/Catalog";
import { NotFound } from "./pages/NotFound/NotFound";
function App() {
  return (
  <div className="wrapper">
      <HeaderIndex/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/goods" element={<Catalog/>} >
          <Route path="/goods/:category" element={<Catalog/>}/>
          <Route path="/goods/:category/path/:numberOfPage" element={<Catalog/>}/>
          <Route path="/goods/path/:numberOfPage" element={<Catalog/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
  </div>
  );
}

export default App;
