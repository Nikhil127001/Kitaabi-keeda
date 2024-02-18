import './App.css';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import ProductDetailsPage from './Pages/productDetailsPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LoginPage from './Pages/loginPage';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element = {<HomePage/>}/>
        <Route exact path='/productDetails/:id'  element = {<ProductDetailsPage/>}/>
        <Route path='/login'  element = {<LoginPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
