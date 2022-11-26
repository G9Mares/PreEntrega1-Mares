import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Saludos Usuario ¿estas listo para ordenar?"/>
     
    </div>
  );
}

export default App;
