import './App.css';
import Nav from "./components/old/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shop from "./components/old/shop";
import About from "./components/old/about";


const App = () => {

    return (
        <BrowserRouter>
            <div className="App">
                <Nav/>
                    <Route path="/shop" exact component={ Shop }/>
                    <Route path="/about" component={ About }/>
            </div>
        </BrowserRouter>

    );
}


export default App;
