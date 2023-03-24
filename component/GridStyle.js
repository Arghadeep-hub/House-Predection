import { Button } from "@mui/material";
import styled from "styled-components";

export const SelectBtn = styled.select`
  border: 0;
  outline: 0;
  width: 75px;
  padding: 9px;
  margin: 0 0 4px 0;
  cursor: pointer;
  background: var(--secondary);
  border-radius: 9px;
  color: var(--light);
  text-transform: capitalize;
  text-align: center;
  appearance: none;
  &:hover {
    background: var(--secondaryHover);
    color: var(--lightHover);
  }
`;

export const AddButton = styled.button`
  border: 3px solid var(--secondary);
  outline: 0;
  margin: 1rem 0;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 6px;
  color: var(--secondary);
  text-transform: capitalize;
  background-color: transparent;
  &:hover,
  &:focus {
    border-color: var(--secondaryHover);
    outline-color: var(--secondaryHover);
    color: var(--secondaryHover);
  }
`;
