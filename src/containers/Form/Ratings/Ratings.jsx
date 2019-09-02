import React from 'react';

import * as S from './styles';
import Form from '../../../components/Form';

const ratingsLib = [
  {
    label: 'Overall Experience',
    name: 'overallExperience'
  },
  {
    label: 'Job Support',
    name: 'jobSupport'
  },
  {
    label: 'Instructors',
    name: 'instructors'
  },
  {
    label: 'Curriculum',
    name: 'curriculum'
  },
];  

const Ratings = ({setValue, values}) => (
  <S.Wrapper>
    <S.Header>Ratings</S.Header>
    <S.Items>
      {ratingsLib.map(({label, name}, idx) => (
        <Form.Rate
          key={idx}
          name={name}
          setValue={setValue} 
          labels={[label, '']}
          value={values[name]}
        />
      ))}
    </S.Items>
  </S.Wrapper>
);

export default Ratings;

