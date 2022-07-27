import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Repeat from './components/Repeat/Repeat';
import UpdateUser from './components/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/add-user' element={<AddUser></AddUser>}></Route>
        <Route path='/update/:id' element={<UpdateUser></UpdateUser>}></Route>
        <Route path='/repeat' element={<Repeat></Repeat>}></Route>
      </Routes>
    </div>
  );
}

export default App;
