import './App.css';
import { Route, Routes } from "react-router-dom";
import PC01 from './pages/PC01';
import PC02 from './pages/PC02';
import CreativeTech from './pages/CreativeTech';
import TechPro from './pages/TechPro';
import Header from './components/Header';


function App() {
  return (
    <div className="w-2/3 m-auto">
      <Header />

      <Routes>
        <Route path="/pages/PC01" element={<PC01 />}>PC01</Route>
        <Route path="/pages/PC02" element={<PC02 />}>PC02</Route>
        <Route path="/pages/CreativeTech" element={<CreativeTech />}>CreativeTech</Route>
        <Route path="/pages/TechPro" element={<TechPro />}>TechPro</Route>
      </Routes>
    </div>
  );
}

export default App;
