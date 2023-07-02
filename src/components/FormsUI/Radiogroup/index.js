import React from "react";
import { useField,useFormikContext } from "formik";
import {FormLabel,FormControl,FormControlLabel,RadioGroup,Radio, capitalize } from "@mui/material";


const RadioGroupWrapper = ({name,legend,options,...otherProps}) => {

    const [field,meta] = useField(name);
    const {setFieldValue} = useFormikContext();

    const handleChange = (ev)=>{
        const {value} = ev.target;
        setFieldValue(name,value);
    }

    const configRadio = {
        ...field,
        ...otherProps,
        onChange:handleChange
    }

    const formControlConfig = {

    }

    if(meta && meta.touched && meta.error){
        formControlConfig.error = true;
    }

    return (
        <FormControl {...formControlConfig}>
            <FormLabel id="controlled-radio-btn-grp">{legend}</FormLabel>
            <RadioGroup
             aria-labelledby="controlled-radio-btn-grp"
             {...configRadio}
            >
                {
                    options.map((item,idx)=>{
                        return (
                            <FormControlLabel key={idx} value={item} control={<Radio/>} label={`${item.charAt(0).toUpperCase() + item.slice(1)}`}></FormControlLabel>
                        )
                    })
                }
            </RadioGroup>
        </FormControl>
    )
}

export default RadioGroupWrapper;