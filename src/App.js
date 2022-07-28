import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Service from './pages/Service';

function App() {
  return (
    <div>
      <Header>

      </Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/service' element={<Service></Service>}> </Route>
        <Route path='/login' element={<Login></Login>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
