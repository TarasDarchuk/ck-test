import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 20px 20px 0 0;
  width: ${({ width }) => width ? width : '300px'};
  input {
    height: 40px;
    margin-top: 10px;
  }
  textarea {
    margin-top: 10px;
  }
`;

export const Error = styled.div`
  color: red;
`

