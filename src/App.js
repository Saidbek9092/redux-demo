import './App.css';
import { useState } from "react";
import AgeButton from "./components/old/AgeButton";
import SalaryButton from "./components/old/SalaryButton";
import ParentComponent from "./components/ParentComponent";

const App = () => {
    const [age, setAge] = useState(12);
    const [salary, setSalary] = useState(5000);

    const ageHandler = ()  => {
        setAge(age+1);
    };

    const salaryHandler = () => {
        setSalary(salary+500);
    };


    return (

        <div>
            <h1>Use CallBack Example</h1>
            <AgeButton clickHandler={ageHandler} age={age}/>
            <SalaryButton clickHandler={salaryHandler} salary={salary}/>
            <ParentComponent/>
        </div>
    );
}


export default App;
