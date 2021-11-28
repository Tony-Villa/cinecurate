import './App.scss';
import Navbar from './components/layout/Navbar/Navbar';
import routes from './routes/config/routes';

function App() {
  return (
    <div className="App">
      <Navbar />
      {routes}
    </div>
  );
}

export default App;
