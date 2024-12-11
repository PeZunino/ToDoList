import styled from "styled-components";

export const StyledButton = styled.button`
  width: 5.625rem;
  background-color: ${(props) => props.theme["blue-200"]};
  color: ${(props) => props.theme["gray-100"]};
  border-radius: 8px;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;