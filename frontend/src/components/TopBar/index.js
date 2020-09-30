import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { TopBarContainer } from './styles';
const TopBar = ({children}) =>{
  return(
    <TopBarContainer>
      <Link to='/'><FiArrowLeft/></Link>
      <h1>{children}</h1>
    </TopBarContainer>
  );
}
export default TopBar;