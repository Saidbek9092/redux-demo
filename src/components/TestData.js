import { useAuthContext } from "../userContext";

const TestData = () => {
    const {check} = useAuthContext()
    console.log(check)
    return (
        <h1>Text</h1>
    )
}

export default TestData