import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom"
import About from "./components/About"
import Catagory from "./components/Category"
import Contactus from './components/Contactus';
import Home from "./components/Home";
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link exact to='/'>Home</Link>{' '}
          <Link to="/about">About</Link>{' '}
          <Link to="/category">Category</Link>{' '}
          <Link to="/contactus">ContactUs</Link>{' '}
          <Link to="/product">Product</Link>{' '}
        </div>
        <hr/>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/category" component={Catagory} />
        <Route path="/contactus" component={Contactus} />
        <Route path="/product" component={Product} />
      </Router>
    </div>
  );
}
export default App;
