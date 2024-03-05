import logo from './logo.svg';
import './App.css';
import  Navbar  from './Components/Navbar';
import { Allroutes } from './Pages/Allroutes';
import Footer from './Pages/Footer';
import CODForm from './Pages/CODpage';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Allroutes/>
        
        <Footer/>
        <CODForm/>
    </div>
  );
}

export default App;
