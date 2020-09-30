import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #2A6565;
  border-radius: 10px;
  height: 56px;
  border: 0;
  font-size: 26px;
  font-weight: 500;
  padding: 0 16px;
  width: 50%;
  margin-bottom: 40px;
  color: #EEEEEE;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#2A6565')}
  }
`;