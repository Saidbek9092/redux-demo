import './App.css';
import Nav from "./components/old/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shop from "./components/old/shop";
import About from "./components/old/about";
import User from "./components/old/user";
import CoffeeContainer from "./components/old/CoffeeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/old/CakeContainer";
import { Test } from "./components/old/Test";
import Video from "./components/old/Video";

const App = () => {

    return (
        <BrowserRouter>
            <div className="App">
                <Nav/>
                    <Route path="/shop" exact component={ Shop }/>
                    <Route path="/about" component={ About }/>
                    <Route path="/shop/:userId" component={ Video }/>
                    <Route path="/shop/:userId" component={ CakeContainer }/>
                    <Route path="/shop/:userId" component={ Test }/>

            </div>
        </BrowserRouter>

    );
}


export default App;
