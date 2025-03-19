import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Products/>}/>
        <Route path="home" element={<Products/>}/>
        <Route path="cart" element={<cart/>}/>
        <Route path="login" element={<login/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    
  );
}
export default App;