import './App.css';
import {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from './pages/List';
import Add from './components/Add';
import ResponsiveAppBar from './components/AppBar';
import Login from './pages/Login';
import Home from './pages/Home';
import LifeCycle from './pages/LifeCycle';
import useItems from './hooks/useItems';
import useCount from './hooks/useCount';
import useAuth from './hooks/useAuth'
import { Navigate, useNavigate } from 'react-router-dom';

const API_URL = "http://localhost:5000"


const PrivateRoute = ({ isLogin, children }) => {
  return isLogin ? children : <Navigate to="/" replace />;
};

const LoginWrapper = ({ login }) => {
  const navigate = useNavigate();

  const handleLogin = async (user) => {
    const data = await login(user);
    if (data.isLogin) {
      navigate("/home");
    }
    return data.isLogin;
  };

  return <Login login={handleLogin} />;
};



function App() {
  const [show, setShow] = useState(false);

  const { count, sum, resta } = useCount();

  const { isLogin, token, login, logout } = useAuth();

  const { items, getItems, addItem, delItem } = useItems(token);

  useEffect(() => {
    if (token && items.length === 0) {
      getItems();
    }
  }, [token, items.length, getItems]);


  return (
    <div>
      <BrowserRouter>
        {isLogin && <ResponsiveAppBar logout={logout}/>}
        <Header />
        <Routes>

            <Route path="/" element={<Login login={login}/>} /> 
            <Route path="/home" element={<Home />} />
            <Route path="/add" element={<Add addItem={addItem}/> }/>
            <Route path="/items" element={<List items={items} ondelete={delItem}/> }/>
            <Route path="/home" element={<Home />} />

        </Routes>
        <Footer />
      </BrowserRouter>
      <h2>LifeCycle</h2>
      <button onClick={() => setShow(!show)}>{show ? "Hide":"Show"}</button>
      {show && <LifeCycle />}
    </div>
  );
}

export default App;