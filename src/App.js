import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Service from './pages/Service';
import Services from './pages/Services';

function App() {
  return (
    <div>
      <Header>

      </Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/service' element={<Services></Services>}> </Route>
        <Route path='/login' element={<Login></Login>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
