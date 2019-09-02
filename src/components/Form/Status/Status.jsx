import React from 'react';

import * as S from './styles';
import Label from '../Label';

import StudentIcon from '../../../assets/cap.svg'
import ApplicantIcon from '../../../assets/applicant.svg'
import GraduateIcon from '../../../assets/certificate.svg'
import SelectedIcon from '../../../assets/selected.svg'

const statusLib = [
  {
    status: 'Graduate',
    icon: GraduateIcon,
  },
  {
    status: 'Student',
    icon: StudentIcon,
  },
  {
    status: 'Applicant',
    icon: ApplicantIcon,
  }
]

const Status = ({ value, setValue }) => (
  <S.Wrapper>
    <Label labels={['Status', '']} />
    <S.Items>
      { statusLib.map(({status, icon}, idx) => (
        <S.Item
          key={idx}
          selected={value === status}
          onClick={() => setValue(status)}
        >
          <img src={icon} alt="status"/>
          <span>{status}</span>
          <img src={SelectedIcon} alt="selected" selected={value === status} />
        </S.Item>
        ))
      }
    </S.Items>
  </S.Wrapper>
);

export default Status;
