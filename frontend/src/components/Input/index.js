import React, { useRef, useEffect, useState, useCallback } from 'react';

import { Container } from './styles';

import { useField } from '@unform/core';

const Input = ({name, icon: Icon, ...props}) =>{
  const inputRef = useRef(null);
  const [isFocused, setIsFocused]= useState(false);
  const [isFilled, setIsFilled]= useState(false);
  const { fieldName, defaultValue, error, registerField} = useField(name);
  
  const handleInputFocus = useCallback(()=>setIsFocused(true),[]);
  const handleInputBlur= useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);

  }, [])
  useEffect(()=>{
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  
  return(
    <Container isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <input
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        defaultValue={defaultValue}
        ref={inputRef}
        {...props}
      />
    </Container>
  );
}
export default Input;