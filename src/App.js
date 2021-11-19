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
                    <Route path="/1" component={ About }/>
                    <Route path="/2" component={ About }/>
                    <Route path="/3" component={ About }/>
                    <Route path="/4" component={ About }/>
                    <Route path="/5" component={ About }/>
                    <Route path="/new1" component={ About }/>
                    <Route path="/new2" component={ About }/>
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
