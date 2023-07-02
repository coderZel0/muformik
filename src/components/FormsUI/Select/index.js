import React from "react";
import { useField,useFormikContext } from "formik";
import { TextField,MenuItem } from "@mui/material";



const SelectWrapper = ({name,options,...otherProps}) => {

    const [field,meta] = useField(name);
    const {setFieldValue} = useFormikContext();
    const handleChange = (ev)=>{
        const {value} = ev.target;
        setFieldValue(name,value);
    }
    
    const configSelect = {
        ...field,
        ...otherProps,
        select:true,
        variant:'outlined',
        fullWidth:true,
        onChange:handleChange
    }

    if(meta && meta.touched && meta.error){
        configSelect.error = true;
        configSelect.helperText = meta.error;
    }

    return(
        <TextField {...configSelect}>
            {Object.keys(options).map((item,index)=>{
                return <MenuItem key={index} value={item}>
                    {options[item]}
                </MenuItem>
            })}
        </TextField>
    )
}

export default SelectWrapper;