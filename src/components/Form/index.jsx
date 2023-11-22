import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './index.css'

const initialValues = {
  username: '',
  lastname: '',
  password: '',
  email: '',


};

const validationSchema = Yup.object({
  username: Yup.string().min(3, "Minimum 3 herf olmalidir").max(15, "Maximum 15 herf olmalidir").required('İstifadəçi adını daxil edin.'),
  lastname: Yup.string().min(7, "Minimum 4 herf olmalidir").max(17, "Maximum 17 herf olmalidir").required('Soyadi daxil edin '),
  password: Yup.string().min(8, "Minimum 8 simvol olmalidir").max(12, "Maximum 12 simvol olmalidir").required('Şifrəni daxil edin.'),
  email: Yup.string().email("Duzgun email daxil et").min(12, "Minimum 12 herf olmalidir").max(64, "Maximum 64 herf olmalidir").required('Emaili daxil edin')
  
  // matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,"Duzgun email daxil edin").
});

const LoginForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
   
    localStorage.setItem('user', JSON.stringify(values));

    
    window.location.reload();

   
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className='Form_signUP'>
          <div>
            <label htmlFor="username"><strong>İstifadəçi adı:</strong></label>
           
            <Field type="text" id="username" name="username" placeholder=" İstifadəçi adı" />
            <span><ErrorMessage name="username"  /></span>
          </div>

          
          <div>
            <label htmlFor="lastname"><strong>Soyad:</strong></label>
            <Field type="text" id="lastname" name="lastname" placeholder= "Soyad"/>
           <span> <ErrorMessage name="lastname"/></span>
          </div>
          <div>
            <label htmlFor="password"><strong>Şifrə:</strong></label>
            <Field type="password" id="password" name="password" placeholder="Şifrə" />
            <span><ErrorMessage name="password"  /></span>
          </div>

          <div>
            <label htmlFor="email"><strong>Email:</strong></label>
            <Field type="email" id="email" name="email" placeholder="Email" />
           <span> <ErrorMessage name="email"  /></span>
          </div>
        
        

        <button type="submit" disabled={false}>
          Sign Up
        </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;