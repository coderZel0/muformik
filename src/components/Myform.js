import React from 'react';
import { Form,Formik } from 'formik';
import * as Yup from 'yup';
import { Box,Typography,Grid, Button} from '@mui/material';
import TextFieldWrapper from './FormsUI/Textfield';
import SelectWrapper from './FormsUI/Select';
import options from '../data/countries.json';
import hobbies from '../data/hobbies.json';
import RadioGroupWrapper from './FormsUI/Radiogroup';
import MultiSelect from './FormsUI/Multiselect';

/*
    TextInput: For capturing the user's name.
    TextAreaInput: For capturing the user's address.
    Dropdown: For selecting the user's country of residence.
    Radio buttons: For selecting the user's gender.
    Multi-select Dropdown: For selecting the user's hobbies/interests. 
 */
const MyForm = () => {
    const INIT_FORM_STATE = {
        firstname:"",
        lastname:"",
        email:'',
        address:"",
        gender:"",
        country:"",
        hobbies:[]
    };

    const FORM_VALIDATION = Yup.object().shape({
        firstname: Yup.string().required("Required"),
        lastname: Yup.string().required("Required"),
        email : Yup.string().email("not a valid email").required("email required"),
        address: Yup.string().required("require address"),
        country: Yup.string().required("country required"),
        gender: Yup.string(),
        hobbies:Yup.array(Yup.string())
    })
    
  return (
    <Box display="flex" justifyContent="center" alignItems={'center'} p={6}>
        <Formik initialValues={INIT_FORM_STATE}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values)=>alert(Object.values(values))}
        >
            <Form>
                <Grid container spacing={2} maxWidth='sm'>
                    <Grid item xs={12}>
                        <Typography>Your details</Typography>
                    </Grid>
                    {/* First Name */}
                    <Grid item xs={6}>
                        <TextFieldWrapper name='firstname' label='FirstName'/>
                    </Grid>
                    {/* Last Name */}
                    <Grid item xs={6}>
                        <TextFieldWrapper name='lastname' label='LastName'/>
                    </Grid>

                    {/* Email */}
                    <Grid item xs={12}>
                        <TextFieldWrapper name='email' label='Email'/>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography>Your Address</Typography>
                    </Grid>
                    {/* Address Line  */}
                    <Grid item xs={12}>
                        <TextFieldWrapper multiline maxRows={4} minRows={3} name='address' label='Address'/>
                    </Grid>
                    
                    {/* Country Select */}
                    <Grid item xs={12}>
                        <SelectWrapper options={options} name="country" label="Country"></SelectWrapper>
                    </Grid>

                    {/* Gender */}
                    <Grid item xs={12}>
                        <RadioGroupWrapper row={true} legend="Gender" name="gender" options={['male','female','others']} />
                    </Grid>

                    {/* Hobbies */}
                    <Grid item xs={12}>
                        <MultiSelect name="hobbies" label="Hobbies" options={hobbies.map(item=>item.hobby)}/>
                    </Grid>

                    {/* Submit */}
                    <Grid display='flex' pt={3} justifyContent='center' item xs={12}>
                        <Button type='sumbit' color='primary' variant='contained'>Submit</Button>
                    </Grid>
                </Grid>
            </Form>
        </Formik>
    </Box>
  )
}

export default MyForm