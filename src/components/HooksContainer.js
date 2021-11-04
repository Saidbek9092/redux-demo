import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, sendValuesData } from "../redux/user/userActions";
import { Button, Form, Input } from "antd";

const HooksContainer = (props) => {
    const [number, setNumber] = useState(1)
    const numOfCakes = useSelector(state => state.cake.numberOfCakes)
    const userToken = useSelector(state => state.user.users.access)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchUsers())
    }, [])

    //
    // useEffect(() => {
    //     fetchUsers()
    // }, [])
    //
    // return userData.loading ? (
    //         <h2>Loading...</h2>) :
    //     userData.error ? <h2>{userData.error}</h2> :
    //         <div><h2>User List</h2>
    //             <div>
    //                 {
    //                     userData && userData.users.blogs && userData.users.blogs.map((user, index) => <p
    //                         key={index}>{user.blog_title}</p>)
    //                 }
    //             </div>
    //         </div>


    // const onFinish = (values) => {
    //     dispatch(sendValuesData(values))
    //
    // };
    //
    // const onFinishFailed = (errorInfo) => {
    //     console.log(errorInfo)
    //
    // };

    const userData = () => {
        console.log('check')
    }

    return (
        <div>
            <h2>Hooks: Number of cakes: {numOfCakes}</h2>
            {/*<div style={{display: "flex", justifyContent: "center"}}>*/}
            {/*    <input type={"text"} name={"number"} value={number} onChange={e => setNumber(e.target.value)}/>*/}
            {/*    <button onClick={() => dispatch(addCake(number))}>Add {number}cakes</button>*/}
            {/*    <button onClick={() => dispatch(buyCake(number))}>Buy {number} cakes</button>*/}
            {/*</div>*/}
            {/*<button onClick={() => dispatch(fetchUsers())}>Get courses</button>*/}
            {/*<div>*/}
            {/*    {courses && courses.map(course => <p>{course.course_name}</p>)}*/}
            {/*</div>*/}
            {/*<button onClick={userData}>Press it</button>*/}
            {/*<div style={{fontSize: 30}}><p style={{fontWeight: 900}}>Login</p></div>*/}
            {/*<Form*/}

            {/*    name="basic"*/}
            {/*    labelCol={{*/}
            {/*        span: 8,*/}
            {/*    }}*/}
            {/*    wrapperCol={{*/}
            {/*        span: 8,*/}
            {/*    }}*/}
            {/*    initialValues={{*/}
            {/*        remember: true,*/}
            {/*    }}*/}
            {/*    onFinish={onFinish}*/}
            {/*    onFinishFailed={onFinishFailed}*/}
            {/*    autoComplete="off"*/}
            {/*>*/}
            {/*    <Form.Item*/}
            {/*        label="Username"*/}
            {/*        name="username"*/}
            {/*        rules={[{required: true, message: 'Please input your username!'}]}*/}
            {/*    >*/}
            {/*        <Input/>*/}
            {/*    </Form.Item>*/}

            {/*    <Form.Item*/}
            {/*        label="Password"*/}
            {/*        name="password"*/}
            {/*        rules={[{required: true, message: 'Please input your password!'}]}*/}
            {/*    >*/}
            {/*        <Input.Password/>*/}
            {/*    </Form.Item>*/}
            {/*    <Form.Item wrapperCol={{offset: 8, span: 8}}>*/}
            {/*        <Button type="primary" htmlType="submit">*/}
            {/*            Submit*/}
            {/*        </Button>*/}
            {/*    </Form.Item>*/}
            {/*</Form>*/}
        </div>
    )
}


export default HooksContainer