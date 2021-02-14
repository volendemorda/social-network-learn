import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Login = ()=>{
    return (
        <div className="main">
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div>
                                <Field type="email" name="email" />
                            </div>
                            <div>
                                <Field type="password" name="password" />
                            </div>
                            <button type="submit" disabled={isSubmitting}>
                                Войти
                            </button>
                        </Form>
                    )}
                </Formik>
        </div>
    )
}
export default Login