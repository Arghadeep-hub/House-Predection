import { Button } from "@mui/material";
import styled from "styled-components";

export const SelectBtn = styled.select`
  border: 0;
  outline: 0;
  width: 100px;
  padding: 9px;
  margin: 0 0 4px 0;
  cursor: pointer;
  background: var(--dark);
  border-radius: 9px;
  color: var(--light);
  text-transform: capitalize;
  text-align: center;
  appearance: none;
  &:hover {
    background: var(--darkHover);
    color: var(--lightHover);
  }
`;

export const AddButton = styled.button`
  border: 3px solid var(--dark);
  outline: 0;
  margin: 1rem 0;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 6px;
  color: var(--dark);
  text-transform: capitalize;
  background-color: transparent;
  &:hover,
  &:focus {
    border-color: var(--darkHover);
    outline-color: var(--darkHover);
    color: var(--darkHover);
  }
`;

export const ItemsSection = styled.div`
  margin: 0 15px;
  padding: 10px 15px;
  color: var(--dark);
  border-radius: 6px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: var(--secondaryHover);
`;
export const Heading = styled.h5`
  font-size: 22px;
  width: 100%;
`;
export const Paragraph = styled.p`
  width: 50%;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
`;
