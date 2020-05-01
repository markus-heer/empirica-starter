import styled from 'styled-components';

export const Avatar = styled.img`
  width: 8rem;
  height: 8rem;
  margin: 3rem 0;
`;

export const Button = styled.button`
  margin: 2rem 1rem 0 0;
  padding: 0.8rem 1.2rem;
  border-radius: 0.3rem;
  border: 1px solid lightgray;
  background-color: #eee;

  &:hover {
    background-color: #ddd;
  }
`;

export const Label = styled.label`
  display: block;
  margin: 2rem 0 1rem;
`;

export const Input = styled.input`
  padding: 0.3rem 0.5rem;
  border-radius: 0.3rem;
  border: 1px solid lightgray;
`;

export const Radio = styled.input`
  margin-right: 0.5rem;
`;

export const Textarea = styled.textarea`
  padding: 0.3rem 0.5rem;
  border-radius: 0.3rem;
  border: 1px solid lightgray;
`;
