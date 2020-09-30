import styled, {css} from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    width: 39%;
    margin-right:1%;
    box-shadow:0px 0px 10px 0px #2A6565;
    height: 93vh;
    h1{
      margin-bottom: 30px;
    }
  }
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;

  height:93vh;
  ul{
    list-style: none;
    width: 100%;
    li{
      margin-bottom:10px;
      div{
        border-radius: 10px 10px 10px 10px;
        margin-right: 1.5%;
        background: #EEEEEE;
        border: 0;
        padding: 16px;
        width: 100%;
        color: #2A6565;

        display:flex;
        align-items: center;
        p{
          margin: auto;
        }
        span{
          flex-direction: column;
          width:4%;
          button{
            background: transparent;
            border-radius: 10px;
            width:100%;
            border: 0;
            font-size: 26px;
            font-weight: 500;
            color: #2A6565;
            transition: background-color 0.2s;

            &:hover {
              background: ${shade(0.2, '#EEEEEE')}
            }
            & + button{
              margin-top:20px;
            }
          }
        }
      }
    }

  }
  h1{
    margin: 30px;
  }
`;