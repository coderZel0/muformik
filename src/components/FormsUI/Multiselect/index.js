import React from "react";
import { useField,useFormikContext } from "formik";
import {MenuItem,Box,OutlinedInput, FormControl,InputLabel, Input } from "@mui/material";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



const MultiSelect = ({name,options,label,...otherProps}) => {

    const [field,meta] = useField(name);
    const {setFieldValue} = useFormikContext();

    const handleChange = (e)=>{
        const {value} = e.target;
        setFieldValue(name,value);
    }

    const configMultiSelect = {
        ...field,
        ...otherProps,
        fullWidth:true,
        variant:'outlined',
        onChange:handleChange    
    }

    const formControlConfig = {
        fullWidth:true,

    }

    return (
        <FormControl {...formControlConfig}>
            <InputLabel>{label}</InputLabel>
            <Select
                multiple
                {...configMultiSelect}
                input={<OutlinedInput label="Hobbies" />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                        <Chip key={value} label={value} />
                    ))}
                    </Box>
                )}
                MenuProps={MenuProps}
                >
                    {
                        options.map(item=>{
                            return (
                                <MenuItem key={item} value={item}>
                                    {item.charAt(0).toUpperCase()+item.slice(1)}
                                </MenuItem>
                            )
                        })
                    }
            </Select>
        </FormControl>
    )
}

export default MultiSelect;