import React from 'react';
import { Select } from 'antd';
import { FastField } from 'formik';
import * as S from './styles';

import inputs from '../lib';
import Label from '../Label';

const { Option } = Select;

const StyledSelect = ({ lib, options, field, form, ...rest }) => {
  const { mainLabel, grayoutLabel } = lib;
  const { name } = field;
  const { setFieldValue } = form;
  return (
    <S.Wrapper>
      {mainLabel || grayoutLabel &&
      <div>
        <Label labels={[mainLabel, grayoutLabel]}/>
      </div>}
      <Select onSelect={v => setFieldValue(name, v)} {...field}>
        {options.map(({value, label}, idx) => (
          <Option key={idx} value={value}>{label}</Option>
        ))}
      </Select>
    </S.Wrapper>
  )
}

const FastSelect = ({type, options}) => {
  const { name, ...rest } = inputs[type];
  return (
      <FastField name={name} render={props => (
        <StyledSelect options={options} lib={rest} {...props} />
      )} />
  )
}

export default FastSelect;