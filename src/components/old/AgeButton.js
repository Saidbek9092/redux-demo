import React from "react";
import {Button} from "antd";

const AgeButton = (clickHandler, age  ) => {
    console.log("Age Button Rendered Age = " + age)
    return (
        <Button onClick={clickHandler} type="primary" style={{ margin : 2}}>Increment Age</Button>
    )
};

export default AgeButton