import './App.css';
import { Route, Routes } from "react-router-dom";
import PC01 from "./pages/PC01";
import PC02 from "./pages/PC02";
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Header />
      <Nav />

      <Routes>
        <Route path="/pages/PC01" element={<PC01 />}>PC01</Route>
        <Route path="/pages/PC02" element={<PC02 />}>PC02</Route>
      </Routes>
    </div>
  );
}

export default App;
