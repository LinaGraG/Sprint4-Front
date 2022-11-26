import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AppBarWrapper = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 750px) {
    justify-content: flex-start;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const AppBarLogo = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const SearchBar = styled.form`
  height: 40px;
  width: 100%;
  background: white;
  display: flex;
  align-items: center;
  padding: 0 0 0 0;
  background: white;
  border-radius: 20px;
`;

export const SearchBarInput = styled.input`
  height: 40px;
  width: 100%;
  border: none;
  outline: none;
  padding: 10px;
  padding-left: 15px;
  font-size: 18px;
  background-color: white;
  color: var(--artelak-blue);
  border-radius: 20px;
`;

export const SearchBarButton = styled.div`
  font-size: 20px;
  border: none;
  border-radius: 50%;
  min-width: 40px;
  min-height: 40px;
  color: white;
  background: var(--artelak-ocre);
  cursor: pointer;
  border-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconNavLink = styled(NavLink)`
  color: white;
  margin: 10px;
  &:hover {
    cursor: pointer;
    color: var(--artelak-ocre);
  }
`;

export const SearchContainer = styled.div`
  display: none;
  padding-left: 1rem;
  padding-right: 1rem;
  @media screen and (max-width: 750px) {
    width: 100%;
    height: 80px;
    position: sticky;
    top: 80;
    z-index: 99;
    background-color: var(--artelak-blue);
    margin: auto;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
