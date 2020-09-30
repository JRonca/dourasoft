import styled from 'styled-components';
import { shade } from 'polished';

export const TopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #2A6565;
  height: 7vh;
  font-weight: 500;
  padding: 5px;
  width: 100%;
  color: #EEEEEE;
  h1{
    align-self: center;
    margin-left:auto;
    margin-right:auto;
  }
  a{
    background: #2A6565;
    text-decoration:none;
    border: 0;
    font-size: 26px;
    margin-bottom: 40px;
    color: #EEEEEE;
    transition: background-color 0.2s;
    font-family: 'Roboto', serif;
    font-weight: 500;
    display: flex;
    align-items: center;
    place-content: center;

    width: 40px;
    height: 40px;
    padding:auto;
    border-radius:100%;
    &:hover {
      background: ${shade(0.2, '#2A6565')}
    }
  }
`;