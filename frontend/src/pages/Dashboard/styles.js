import styled from 'styled-components';
import { shade } from 'polished';

import dashboardBackground from '../../assets/dashboard.jpeg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width:700px;
  h1{
    margin-bottom: 60px;
  }
  a{
    background: #2A6565;
    text-decoration:none;
    border-radius: 10px;
    height: 56px;
    border: 0;
    font-size: 26px;
    padding: 0 16px;
    width: 40%;
    margin-bottom: 40px;
    color: #EEEEEE;
    transition: background-color 0.2s;
    font-family: 'Roboto', serif;
    font-weight: 500;
    display: flex;
    align-items: center;
    place-content: center;

    &:hover {
      background: ${shade(0.2, '#2A6565')}
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${dashboardBackground}) no-repeat center;
  background-size: cover;
`;