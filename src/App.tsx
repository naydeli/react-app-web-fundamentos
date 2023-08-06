import './css/estilos.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Inicio } from './pages/Inicio';
import { Eventos } from './pages/Eventos';
import { Sedes } from './pages/Sedes';
import { Promociones } from './pages/Promociones';
import { Ayuda } from './pages/Ayuda';
import { Header } from './components/Header';
import { Aside } from './components/Aside';
import { Login } from './pages/login';
import { Register } from './pages/Register';
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);


const useRegister = (username: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("token", username + password);
    setIsAuthenticated(true);
    
}

const useLogin = (username: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((user: any) => user.username === username && user.password === password);
    if (user) {
        localStorage.setItem("token", username + password);
        setIsAuthenticated(true);
    }else{
        alert("Usuario o contraseña incorrectos");
    }
}
  const [mostrar, setMostrar] = useState(0);
  const useLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  }

  return (
    <>
    {
      isAuthenticated ?
      <>
      <Header
        mostrar={mostrar}
        setMostrar={setMostrar}
        useLogout={useLogout}
      />
      <Aside
        mostrar={mostrar}
        setMostrar={setMostrar}
      />
      </>
      :
      <div>
      
      </div>
    }

      <main className='p-4 mt-4'>
        <section className="container p-4 m-auto shadow-lg">
          {isAuthenticated ?
          <Routes>
            <Route
              path="/"
              element={<Inicio />}></Route>
            <Route
              path="/eventos"
              element={<Eventos />}></Route>
            <Route
              path="/sedes"
              element={<Sedes />}></Route>
            <Route
              path="/promociones"
              element={<Promociones />}></Route>
            <Route
              path="/ayuda"
              element={<Ayuda />}></Route>
            
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Routes>
          :
          <Routes>
            <Route path="/login" element={<Login useLogin={useLogin} />}></Route>
            <Route path="/register" element={<Register useRegister={useRegister} />}></Route>
            <Route path="*" element={<Navigate to="/login" />}></Route>
          </Routes>


          }

        </section>
      </main>

      <footer className='fixed bottom-0 left-0 right-0 h-auto text-white border-t-4 border-rose-500 bg-slate-500'>
        <div className="container p-4 m-auto">
          <p className="text-center">Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  );
}
