import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  place-items: center;
  form{
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-top: 1vh;
    margin:0;
    input{
      width: 80vw;
    }
    button{
      width: 20vw;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin:0;
  width: 100%;
  form{
      display: flex;
      flex-direction: column;
      align-items: center;
      place-items: center;
      width: 40%;
      height: 80vh;
      margin-right: 2vw;
      padding-top: 10px;
      h1{
        margin-bottom: 30px;
      }
      input{
        width: 90%;
        margin-bottom:10px;
      }
      button{
        width: 20vw;
        height: 9vh;
      }
      div{
        width: 90%;
      }
    }
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  h1{
    margin-bottom: 30px;
  }
  ul{
    list-style: none;
    width: 100%;
    li{
      margin-bottom:10px;
      div{
        background: #EEEEEE;
        border-radius: 10px 10px 10px 10px;
        border: 0;
        padding: 16px;
        width: 100%;
        color: #2A6565;
        display: flex;
        justify-content: center;
        div{
          flex-direction:row;
          a{
            width: 5vh;
          }
        }
        display:flex;
        flex-direction: column;
        align-items: center;
        & + div{
          border-radius: 0px 0px 10px 10px;
        }
        p{
          margin: auto;
        }
        span{
          flex-direction: column;
          width:4%;
          a{
            background: #2A6565;
            text-decoration:none;
            border: 0;
            font-size: 26px;
            margin-bottom: 10px;
            color: #EEEEEE;
            transition: background-color 0.2s;
            font-family: 'Roboto', serif;
            font-weight: 500;
            display: flex;
            align-items: center;
            place-content: center;

            width: 100%;
            height: 40px;
            padding:auto;
            border-radius:10px;
            &:hover {
              background: ${shade(0.2, '#2A6565')}
            }
          }
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
`;