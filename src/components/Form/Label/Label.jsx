import React from 'react';

import * as S from './styles';

const Label = ({labels, ...rest}) => {
  const [mainLabel, grayoutLabel] = labels;
  return(
    <S.Label {...rest}>
      {mainLabel}
      {grayoutLabel && <span> {grayoutLabel}</span>}
    </S.Label>
  )
};

export default Label;
