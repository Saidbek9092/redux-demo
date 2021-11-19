import './App.css';
import Nav from "./components/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shop from "./components/shop";
import About from "./components/about";
import User from "./components/user";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Nav/>
                    <Route path="/" exact component={ Home }/>
                    <Route path="/shop" exact component={ Shop }/>
                    <Route path="/shop/:userId" component={ User }/>
                    <Route path="/about" component={ About }/>
            </div>
        </BrowserRouter>
    );
}

const Home = () => {
    return (
        <h1>Home page</h1>
    )
}




export default App;
