import React, { Fragment } from 'react';
import { Rate } from 'antd';

import * as S from './styles';

import Label from '../Label';

const Rating = ({ labels, setValue, name, value }) => {
  return (
  <S.Wrapper>
    {labels && <Label labels={labels} />}
    <div>
      <Rate value={value} onChange={value => setValue(name, value)} />  
    </div>
  </S.Wrapper>
  )
}

export default Rating;
