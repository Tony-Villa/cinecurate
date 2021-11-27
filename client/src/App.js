import './App.scss';
import { AuthForm } from './components/auth/AuthForm';
import Navbar from './components/layout/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AuthForm />
    </div>
  );
}

export default App;
