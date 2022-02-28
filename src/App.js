import './App.css';
import Lesson from "./components/Lesson";
import Topic from "./components/Topic";
import {PracticumCONTEXTProvider} from "./components/context/PracticumCONTEXT.js";
import Independent from "./components/Indexpendent";

const App = () => {
    return (
        <PracticumCONTEXTProvider>
            <Topic/>
            <Lesson/>
            <Independent/>
        </PracticumCONTEXTProvider>
    )
}

export default App;
