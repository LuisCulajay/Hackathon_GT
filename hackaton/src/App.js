import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Inicio from './Components/Pages/Inicio/Inicio'

//-------> PESTAÑA DE IMPUESTOS
import PagarImpuestos from './Components/Pages/Impuestos/PagarImpuestos'
import QueImpuestosPagar from './Components/Pages/Impuestos/QueImpuestosPagar'
import CalcularImpuestos from './Components/Pages/Impuestos/CalcularImpuestos'


//-------> PESTAÑA DE ESTADISTICAS
import ConsejosAhorro from './Components/Pages/Estadisticas/ConsejosAhorro'
import GraficaAhorros from './Components/Pages/Estadisticas/GraficaAhorros'
import GraficaGastos from './Components/Pages/Estadisticas/GraficaGastos'


//-------> PESTAÑA DE PLAN DE RETIRO
import PlanRetiro from './Components/Pages/PlanRetiro/PlanRetiro'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} exact />  


          <Route path="/uno" element={<PagarImpuestos />} exact />   
          <Route path="/dos" element={<QueImpuestosPagar />} exact />   
          <Route path="/tres" element={<CalcularImpuestos />} exact /> 


          <Route path="/cuatro" element={<ConsejosAhorro />} exact />   
          <Route path="/cinco" element={<GraficaAhorros />} exact />   
          <Route path="/seis" element={<GraficaGastos />} exact />    


          <Route path="/siete" element={<PlanRetiro />} exact />    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

