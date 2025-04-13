import * as React from "react";
import styled from "styled-components";

const AlertContainer = styled.div`
  background-color: green;
  color: #fff;
  padding: 1em;
  border-radius: 0.5em;
`;

const Alert: React.FC<{ message: string }> = ({ message }) => {
  // const { message } = props;
  return (
    <AlertContainer>
      {message}
    </AlertContainer>
  );
};

export default Alert;
