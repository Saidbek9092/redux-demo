import React from "react";
import {Button} from "antd";


const SalaryButton = (clickHandler, salary  ) => {
    console.log("Salary Button Rendered Salary = " + salary)
    return (
        <Button onClick={clickHandler} type="primary" style={{ margin : 2}}>Increment Salary</Button>
    )
};

export default SalaryButton