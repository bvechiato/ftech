import './App.css';
import { Route, Routes } from "react-router-dom";
import Course from './components/Course';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Header />
      <Nav />

      <Routes>
        <Route path="/pages/PC01" element={<Course name="PCO1" />}>PC01</Route>
        <Route path="/pages/PC02" element={<Course name="PCO2" />}>PC02</Route>
      </Routes>
    </div>
  );
}

export default App;
