import { useAuthContext } from "../userContext";

const UserData = () => {
    const {count, setCount} = useAuthContext()
    return (
        <>
            <button onClick={()=> setCount(count+1)}>Press</button>
            <h1>{count}</h1>
        </>

    )
}

export default UserData