import { Outlet } from 'react-router-dom'
import './App.css';
import Title from './Header/Header';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
