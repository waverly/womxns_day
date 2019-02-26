import styled from "styled-components";

const NavStyles = styled.ul`
  position: fixed;
  width: 100vh;
  z-index: 150;
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
  height: 50px;
  right: 0;
  top: 0;
  transform: translateY(-65px) rotate(calc(-90deg));
  transform-origin: right bottom;


  a,
  button {
    margin: auto 2rem;
    display: inline-block;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 2rem;
    background: none;
    border: 0;
    cursor: pointer;
    color: black;
    &:hover{
      -webkit-text-stroke: 1px black;
      color: transparent;
    }
    @media (max-width: 700px) {
      font-size: 10px;
    }
  }
  @media (max-width: 1300px) {
    /* border-top: 1px solid ${props => props.theme.lightgrey};
    width: 100%;
    justify-content: center;
    font-size: 1.5rem; */
  }
`;

export default NavStyles;
