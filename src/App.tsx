import './App.css';
import PrimerComponente from './componentes/primerComponente/PrimerComponente';
import Producto from './componentes/producto/Producto';
import AddToCard from './componentes/addToCart/AddToCart';

function App() {
  return (
    <>
      <div className="alert alert-primary">
        Hola Mundo
      </div>
      <PrimerComponente name="Alex" />
      <Producto
        price = {100}
        color = "red"
        children = {<div>Hola</div>}
        detail = {{title: "Arroz", text:"Arroz integral muy rico"}}
        isFruit = {true}
      />
      <AddToCard/> 
    </>
  );
}

export default App;
