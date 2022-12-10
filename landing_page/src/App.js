import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import NavBar from "./components/navbar/NavBar";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer/>} />
          <Route path="/Categoria/:category" element={<ItemListContainer/>} />
          <Route path="*" element={<h1>Error 404</h1>} />
          <Route/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
