import ToogleComponent from "./useToggle/ToggleComponent";
import './App.css';
import { useEffect, useState } from "react";


const App = () => {

    // const [users, setUsers] = useState();
    //
    //
    // function loadJson(url) {
    //     return fetch(url)
    //         .then(response => {
    //             if (response.status == 200) {
    //                 return response.json();
    //             } else {
    //                 throw new Error(response.status);
    //             }
    //         });
    // }
    //
    // loadJson('https://javascript.info/no-such-user.json')
    //     .catch(alert); // Error: 404

    // const sendGetRequest = async () => {
    //     try {
    //         const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    //         const data = await resp.json()
    //         console.log(data)
    //     } catch (err) {
    //         // Handle Error Here
    //         console.error(err);
    //     }
    // };

    // const sendGetRequest1 = async () => {
    //     try {
    //         const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    //         return await resp.json()
    //     } catch (err) {
    //         // Handle Error Here
    //         console.error(err);
    //     }
    // };
    // sendGetRequest1().then(res=> console.log(res))

    const handleButton = (data ,e) => {
        console.log(data)
        console.log(e.preventDefault())

    }

    return (
        <div>
            {/*{users?.map(el=> <h1>{el.title}</h1>)}*/}
            <button  onClick={handleButton.bind(null, 'saidbek')}>Press</button>
            {/*<ToogleComponent/>*/}
        </div>
    );
}


export default App;

