import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux/user/userActions";
import { buyIceCream } from "../../redux/icecream/icecreamActions";
import 'antd/dist/antd.css';
import {Form, Input, Button} from "antd";
import {sendValuesData} from "../../redux/user/userActions";
import axios from "axios";
import {notification } from 'antd';

const UserContainer = (props) => {
    const [data, setData] = useState(null)
    //
    // useEffect(() => {
    //     fetchUsers()
    // }, [])

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


    const onFinish = (values) => {
        setData(values)
        props.sendData(data)
        // axios.post('/api/login', values).then(res => {
        //     notification.success({
        //         message: 'Successfully logged in'
        //     })
        //     console.log(res.statusText)
        //         // window.localStorage.setItem('newuser', res.data.access)
        //         // props.dataFromParent(values)
        //         // history.push('/tasks')
        //     }
        // ).catch(error => console.log(error))
    };

    const onFinishFailed = (errorInfo) => {
        // notification.error({
        //     message: 'Enter correct data!'
        // })
    };
    return <div>
        <div style={{fontSize: 30}}><p style={{fontWeight: 900}}>Login</p></div>
        <Form

            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 8,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>

        front end
        data.filter(front end)
    </div>
}


const mapStateToProps = state => {
    console.log(state?.user?.users?.access)
    return {
        userData: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        sendData: (data)=> dispatch(sendValuesData(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)