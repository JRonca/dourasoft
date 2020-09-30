import React, { useRef, useEffect, useState, useCallback } from 'react';
import ReactSelect, {
  Props as SelectProps,
} from 'react-select';
import { Container } from './styles';

import { useField } from '@unform/core';
const Select = ({name, icon: Icon, ...rest}) =>{
  const selectRef = useRef(null);
  const [isFocused, setIsFocused]= useState(false);
  const [isFilled, setIsFilled]= useState(false);
  const { fieldName, defaultValue, error, registerField} = useField(name);
  
  const handleSelectFocus = useCallback(()=>setIsFocused(true),[]);
  const handleSelectBlur= useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!selectRef.current?.value);

  }, [])
  useEffect(()=>{
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField]);
  
  return(
    <Container isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <ReactSelect
        onBlur={handleSelectBlur}
        onFocus={handleSelectFocus}
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        {...rest}
      />
    </Container>
  );
}
export default Select;