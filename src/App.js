import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import CoffeeContainer from "./components/CoffeeContainer";
import HooksContainer from "./components/HooksContainer";
import axios from "axios";

axios.defaults.baseURL = 'https://ziyodov.pythonanywhere.com'
const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                {/*<UserContainer/>*/}
                {/*<ItemContainer cake/>*/}
                {/*<IceCreamContainer/>*/}
                {/*<ItemContainer coffee/>*/}
                {/*<CoffeeContainer/>*/}
                <HooksContainer/>
                {/*<NewCakeContainer/>*/}
            </div>
        </Provider>
    );
}

export default App;
