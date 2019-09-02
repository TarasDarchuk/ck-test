import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import * as S from './styles';

import Form from '../../components/Form';
import Ratings from './Ratings';

const FormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('First Name is Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Last Name is Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email Name is Required')
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  keepAnonymous: true,
  status: '',
  overallExperience: 0,
  jobSupport: 0,
  instructors: 0,
  curriculum: 0,
  title: '',
  yourReview: '',
  pros: '',
  cons: '',
  school: '',
  course: '',
  programType: '',
};

const selectOptions = [{value: 'testValue', label: 'label'}, {value: 'testValue2', label: 'label2'}]

const ReviewForm = () => {
  const [submittedValues, setSubmittedValues] = useState('');

  return (
  <S.Wrapper>
    <Formik
      validationSchema={FormSchema}
      onSubmit={values => setSubmittedValues(JSON.stringify(values))}
      initialValues={initialValues}
      render={({ handleSubmit, values, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <S.MainInfo>
            <Form.Input type='firstName' />
            <Form.Input type='lastName' />
            <Form.Input type='email' />
            <Form.Status value={values.status} setValue={v => setFieldValue('status', v)} />
          </S.MainInfo>
          <Ratings
            values={{
              overallExperience: values.overallExperience,
              jobSupport: values.jobSupport,
              instructors: values.instructors,
              curriculum: values.curriculum,
            }}
            setValue={setFieldValue}
          />
          <Form.Select type='school' options={selectOptions} />
          <Form.Select type='course' options={selectOptions} />
          <Form.Select type='programType' options={selectOptions} />
          <Form.Input width='100%' type='title' />
          <Form.Input width='100%' type='yourReview' />
          <Form.Input width='100%' type='pros' />
          <Form.Input width='100%' type='cons' />
          <div>{submittedValues.toString()}</div>
          <S.Button type="submit">Submit review</S.Button>
        </form>
      )}
      />
  </S.Wrapper>
  )
};

export default ReviewForm;
