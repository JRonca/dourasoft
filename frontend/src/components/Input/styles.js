import styled, {css} from 'styled-components';

export const Container = styled.div`
  background: #EEEEEE;
  border-radius: 10px;
  border: 2px solid #EEEEEE;
  padding: 16px;
  margin-bottom: 40px;
  color: #C4D3D4;

  display:flex;
  align-items: center;
  ${props => props.isFocused && css`
    color: #2A6565;
    border-color: #2A6565;
  `}
  ${props => props.isFilled && css`
    color: #2A6565;
  `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    &::placeholder{
      color: #2A6565;
    }
  }
  svg{
    margin-right: 16px;
  }
`;