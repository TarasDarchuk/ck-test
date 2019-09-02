import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 60%;
  padding: 5%;
`

export const MainInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Button = styled.button`
  color: #fff;
  height: 40px;
  width: 170px;
  border: none;
  margin-top: 50px;
  transition: 0.3s;
  border-radius: 4px;
  background: linear-gradient(193.02deg, #FFCD65 0%, #FE9F35 100%);
  :focus {
    outline: none;
  }
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`