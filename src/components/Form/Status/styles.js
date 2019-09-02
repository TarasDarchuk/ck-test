import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px 0;
`

export const Items = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const Item = styled.div`
  width: 150px;
  height: 44px;
  margin-right: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${({ selected }) => selected ? '#3C91E6' : '#ECECEC'};
  border-radius: 4px;
  transition: 0.3s;
  :hover {
    cursor: pointer;
    border-color: #3C91E6;
  }
  img:last-child {
    opacity: ${({ selected }) => selected ? 1 : 0};
    transition: 0.3s;
  }
`