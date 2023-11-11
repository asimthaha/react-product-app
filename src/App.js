import logo from "./logo.svg";
import "./App.css";
import ProductAdd from "./components/ProductAdd";
import ProductSearch from "./components/ProductSearch";
import ProductDelete from "./components/ProductDelete";
import ProductView from "./components/ProductView";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<ProductAdd />}></Route>
        <Route path="search" element={<ProductSearch />}></Route>
        <Route path="delete" element={<ProductDelete />}></Route>
        <Route path="view" element={<ProductView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
