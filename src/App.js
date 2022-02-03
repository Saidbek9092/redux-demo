import './App.css';
import { Form } from "react-bootstrap";

const App = () => {
    return (
        <Form>
            <Form.Label>Question 1</Form.Label>
            <Form.Check
                type='radio'
                id='1'
                label='Answer 1'
                name='1'
            />
            <Form.Check
                type='radio'
                id='2'
                label='Answer 2'
                name='2'
            />
            <Form.Check
                type='radio'
                id='3'
                label='Answer 2'
                name='3'
            />
        </Form>
    )
}

export default App;
