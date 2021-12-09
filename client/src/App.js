import { useEffect, useMemo, useState } from 'react';
import './App.scss';
import Footer from './components/layout/Footer/Footer';
import Navbar from './components/layout/Navbar/Navbar';
import { ReloadContext } from './Context/ReloadContext';
import { UserContext } from './Context/UserContext';
import routes from './routes/config/routes';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

function App() {
  const [isUser, setIsUser] = useState(false);
  const [user, setUser] = useState(null);
  const [isReload, setIsReload] = useState(false);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  const setAuth = (boolean) => {
    setIsUser(boolean);
  };

  const getUser = async () => {
    try {
      const res = await fetch(`https://api-cinecurate.herokuapp.com/v1/auth/profile`, {
        method: 'GET',
        headers: { token: localStorage.token },
      });
      const parsedRes = await res.json();

      setUser(parsedRes);
    } catch (err) {
      console.log(err.message);
    }
  };

  const isAuth = async () => {
    try {
      const res = await fetch(`https://api-cinecurate.herokuapp.com/v1/auth/isVerified`, {
        method: 'GET',
        headers: { token: localStorage.token },
      });
      const parsedRes = await res.json();

      if (parsedRes !== true) {
        return;
      }

      parsedRes == true ? setAuth(true) : setAuth(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    isAuth();
  });

  useEffect(() => {
    document.title = 'CineCurate';
  }, []);

  useEffect(() => {
    getUser();
  }, [isUser]);

  return (
    <div className="App">
      <UserContext.Provider value={value}>
        <Navbar isUser={isUser} setAuth={setAuth} />
        <ReloadContext.Provider value={{ isReload, setIsReload }}>{routes}</ReloadContext.Provider>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
