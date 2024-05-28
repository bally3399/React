import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import style from './index.module.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Icon } from '@iconify/react';
import loadingLoop from '@iconify/icons-line-md/loading-loop';
import FilledButtons from "../../component/filledButtons"

const validationSchema = Yup.object().shape({
    input1: Yup.string().required('username is required'),
    input2: Yup.string().required('password is required'),
});

const PageTemplate = ({image, headerName, message, buttonText, input1, input2, text, textInput}) => {
    const [isLoading, setIsLoading] = useState(false);

    const submitButton = async (values, { resetForm }) => {
        setIsLoading(true);
        try {
            const payload = {
                username: values.input1,
                password: values.input2,
            };
            const response = await axios.post("http://localhost:8090/api/User/register", payload);

            if (response.data.successful) {
                toast.success('Welcome ${values.username}, you have signed up successfully!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                resetForm();
            } else {
                toast.error('Sign up failed. Please try again', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (error) {
            console.error('Error during sign up:', error);
            toast.error('Sign up failed. Please try again', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={style.container}>
            <img src={image} alt="image" />
            <div className={style.heroText}>
                <h2>{headerName}</h2>
                <p>{message}</p>
                <Formik
                    initialValues={{ input1: '', input2: ''}}
                    validationSchema={validationSchema}
                    onSubmit={submitButton}
                >
                    {({ values, errors, touched, handleChange, handleBlur }) => (
                        <Form className={style.formStyle}>
                            {input1 && (
                                <div className={style.account}>
                                    <Field
                                        type="text"
                                        name="input1"
                                        placeholder={input1}
                                        value={values.input1}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{ borderColor: errors.input1 && touched.input1 ? 'red' : 'inherit' }}
                                    />
                                    {errors.input1 && touched.input1 && <div className={style.error}>{errors.input1}</div>}
                                </div>
                            )}
                            {input2 && (
                                <div>
                                    <Field
                                        type="password"
                                        name="input2"
                                        placeholder={input2}
                                        value={values.input2}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{ borderColor: errors.input2 && touched.input2 ? 'red' : 'inherit' }}
                                    />
                                    {errors.input2 && touched.input2 && <div className={style.error}>{errors.input2}</div>}
                                </div>
                            )}
                            <div className={style.mess}>
                                <p>{text}</p>
                                <a href={"http://localhost:3001/login"}>{textInput}</a>
                            </div>
                            <FilledButtons text={buttonText}>
                                {isLoading ? (
                                    <div className={style.flex}>
                                        <Icon width={24} height={24} icon={loadingLoop} />
                                    </div>
                                ) : (
                                    buttonText

                                )}
                            </FilledButtons>
                        </Form>
                    )}
                </Formik>
            </div>
            <ToastContainer />
        </div>
    );
};

export default PageTemplate;