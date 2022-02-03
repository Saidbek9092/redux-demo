import './App.css';
import Lesson from "./components/Lesson";
import Topic from "./components/Topic";
import {PracticumCONTEXTProvider} from "./components/context/PracticumCONTEXT.js";

const App = () => {
    return (
        <PracticumCONTEXTProvider>
            <Topic/>
            <Lesson/>
        </PracticumCONTEXTProvider>
    )
}

export default App;
