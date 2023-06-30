import { useState } from "react";
import { Box,Button,TextField,Typography,useTheme } from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Dropzone from "react-dropzone";
import FlexBetween from "../../components/FlexBetween";


const registerSchema=yup.object().shape({
    firstName: yup.string().required("required"),
    lastName:yup.string().required("required"),
    email:yup.string().email("invalid email").required("required"),
    password:yup.string().required("required"),
    location:yup.string().required("required"),
    occupation:yup.string().required("required"),
    picture:yup.string().required("required"),

});

const loginSchema=yup.object().shape({
    email:yup.string().email("invalid email").required("required"),
    password:yup.string().required("required"),
});


const initialValuesRegister={
    firstName: "",
    lastName:"",
    email:"",
    password:"",
    location:"",
    occupation:"",
    picture:"",
}

const initialValuesLogin={
    email:"",
    password:"",
}


const Form=()=>{
    const [page,setPage]=useState("Login");
    const {palette}=useTheme();
    
    const isLogin= page==="Login";
    const isRegister= page==="Register";

    return(
        <Formik 
            //onSubmit={handleFormSubmit} 
            initialValues={isLogin ? initialValuesLogin :initialValuesRegister}
            validationSchema={isLogin ? loginSchema :registerSchema}
        >

            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm
            })=>(
                <form onSubmit={handleSubmit}>
                    <Box
                        display="grid"
                        gap="30px"
                        gridTemplateColumns="repeat(4,minmax(0,1fr))"
                        sx={{
                            "& > div": {gridColumn: undefined}
                        }}
                    >
                        {
                            isRegister && (
                                <>
                                    <TextField
                                        label="First Name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.firstName}
                                        name="firstName"
                                        error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                                        helperText={touched.firstName && errors.firstName}
                                        sx={{gridColumn:"span 2"}}
                                    />
                                    <TextField
                                        label="Last Name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.lastName}
                                        name="lastName"
                                        error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                                        helperText={touched.lastName && errors.lastName}
                                        sx={{gridColumn:"span 2"}}
                                    />
                                    <TextField
                                        label="Location"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.location}
                                        name="location"
                                        error={Boolean(touched.location) && Boolean(errors.location)}
                                        helperText={touched.location && errors.location}
                                        sx={{gridColumn:"span 4"}}
                                    />
                                    <TextField
                                        label="Occupation"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.occupation}
                                        name="occupation"
                                        error={Boolean(touched.occupation) && Boolean(errors.occupation)}
                                        helperText={touched.occupation && errors.occupation}
                                        sx={{gridColumn:"span 4"}}
                                    />

                                    <Box
                                        gridColumn="span 4"
                                        border={`1px solid ${palette.neutral.medium}`}
                                        borderRadius="0.5%"
                                        p="1rem"
                                    >
                                        <Dropzone
                                            acceptedFiles=".jpg,.jpeg,.png"
                                            multiple={false}
                                            onDrop={(acceptedFiles)=>setFieldValue("picture",acceptedFiles[0])}
                                        >
                                            {({getRootProps,getInputProps})=>(
                                                <Box
                                                    {...getRootProps()}
                                                    border={`2px dashed ${palette.primary.main}`}
                                                    p="1rem"
                                                    sx={{"&:hover":{cursor:"pointer"}}}
                                                >
                                                   <input {...getInputProps()}/>
                                                   {
                                                        !values.picture ? (<p>Add your picture here.</p>):
                                                        (
                                                            <FlexBetween>
                                                                <Typography>{values.picture.name}</Typography>
                                                                <EditOutlinedIcon/>
                                                            </FlexBetween>
                                                        )
                                                   } 

                                                </Box>
                                            )}
                                        </Dropzone>
                                    </Box>
                                </>
                            )
                        }

                        <TextField
                            label="Email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            name="email"
                            error={Boolean(touched.email) && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                            sx={{gridColumn:"span 4"}}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                            name="password"
                            error={Boolean(touched.password) && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                            sx={{gridColumn:"span 4"}}
                        />

                    </Box>

                    <Box>
                        <Button
                            fullWidth
                            type="submit"
                            sx={{
                                m:"2rem 0",
                                p:"1rem",
                                backgroundColor:palette.primary.main,
                                color:palette.background.alt,
                                "&:hover": {color:palette.primary.main}
                            }}
                        >
                            {isLogin ? "Ready to Konnect" : "Let's Konnect"}
                        </Button>
                        <Typography
                            onClick={()=>{
                                setPage(isLogin ? "Register" : "Login");
                                resetForm();
                            }}
                            sx={{
                                textDecoration:"underline",
                                color:palette.primary.main,
                                "&:hover":{
                                    cursor:"pointer",
                                    color:palette.primary.light,
                                },
                            }}
                        >
                            {isLogin ? "Don't have an account? Sign up here":"Already a user? Login here"}
                        </Typography>
                    </Box>
                </form>
            )}

        </Formik>
    )

}

export default Form;