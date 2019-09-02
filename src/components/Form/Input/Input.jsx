import React from 'react';
import { Input } from 'antd';
import { FastField, ErrorMessage } from 'formik';
import styled from 'styled-components';

import * as S from './styles';
import inputs from '../lib';
import Label from '../Label';

const { TextArea } = Input;

const StyledInput = ({ lib, field, width, form }) => {
  const { mainLabel, grayoutLabel, type, ...libInfo } = lib;
  const { name } = field;
  return (
    <S.Wrapper width={width}>
      {mainLabel || grayoutLabel && <Label labels={[mainLabel, grayoutLabel]} />}
        {type === 'textarea' ? <TextArea { ...{ ...libInfo, ...field }} />
        : <Input {...{ ...libInfo, ...field }}/>}
      <ErrorMessage component={S.Error} name={name} />
    </S.Wrapper>
  )
}

const FastInput = ({ type, width }) => {
  const { name, ...rest } = inputs[type];
  return (
      <FastField name={name} render={props => <StyledInput width={width} lib={rest} {...props} />} />
  )
};

export default FastInput;
