import './App.css';
import Nav from "./components/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shop from "./components/shop";
import About from "./components/about";
import User from "./components/user";
import CoffeeContainer from "./components/CoffeeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import { Test } from "./components/Test";
import Video from "./components/Video";

const App = () => {

    const handleData = () => {
        console.log('saidbek')
    }
    return (
        // <BrowserRouter>
        //     <div className="App">
        //         <Nav/>
        //             <Route path="/" exact component={ Home }/>
        //             <Route path="/shop" exact component={ Shop }/>
        //             <Route path="/shop/:userId" component={ User }/>
        //             <Route path="/about" component={ About }/>
        //
        //     </div>
        // </BrowserRouter>
        <Video data = {handleData}/>

    );
}


export default App;
