import React from 'react';
import styled from 'styled-components';

import { ButtonProps } from './Button.props';

const Btn = styled.button`
  color: var(--white);
  border: 1px solid var(--gray);
  padding: 5px 15px;

  &:hover {
    background: var(--blue);
  }
`

export const Button:React.FC<ButtonProps> = ({children, ...props}) => {
  return (
	<Btn {...props}>
		{children}
	</Btn>
  )
}
