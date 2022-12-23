import React from "react";
import styled from "styled-components";

import { ButtonProps } from "./Button.props";

const Btn = styled.button`
  color: var(--black);
  border: 1px solid var(--dark-gray);
  padding: 5px 15px;

  &:hover {
    background: var(--light-blue);
  }
`;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <>
      <Btn {...props}>{children}</Btn>
    </>
  );
};
