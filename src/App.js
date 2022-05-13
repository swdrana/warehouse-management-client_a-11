import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AddItem from './components/AddItem/AddItem';
import MyItems from './components/MyItems/MyItems';
import Login from './Pages/Login/Login';
import ManageItems from './components/ManageItems/ManageItems';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Update from './components/Update/Update';
import Signup from './Pages/Signup/Signup';
import RequireAuth from './Pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/manage-items' element={<ManageItems/>}/>
        <Route path='/add-item' element={<RequireAuth><AddItem/></RequireAuth>}/>
        <Route path='/my-items' element={<MyItems/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
