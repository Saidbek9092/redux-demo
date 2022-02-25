import { usePracticumContext } from "./context/PracticumCONTEXT";
import Lesson from "./Lesson";

const Topic = () => {
    const {topic, setTopic, handleClick} = usePracticumContext()
    console.log( 'Topic' )
    return (
        <>    <h1>{ topic }</h1>
            <button onClick={ () => handleClick('Saidbek') }>ChangeTopic</button>
        </>
    )
}

export default Topic