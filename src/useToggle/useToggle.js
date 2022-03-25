import {useState} from "react";

export default function useToggle(defaultValue) {
    const [value, setValue] = useState(defaultValue)

    // value = defaultvalue = props from parent (example false)
    //currentvalue = value which is setted before changing it. In react state may not update immediately.
    function toggleValue(value) {
        setValue(currentValue =>
        typeof value=== "boolean" ? value : !currentValue)
    }
    return [value, toggleValue]
}

/*How does it work
* if user press make true toggleValue (value = true) takeas value and checks
* previous value (currentValue) was false, in checking typeOf is it boolean and takes true
* and return [value === true, toggleValue]
* */

