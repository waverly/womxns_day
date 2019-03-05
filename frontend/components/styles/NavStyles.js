import styled from "styled-components";

const NavStyles = styled.ul`
  position: fixed;
  width: 100vh;
  z-index: 150;
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
  height: auto;
  right: 0;
  top: 0;
  transform: translateY(-95px) rotate(calc(-90deg));
  transform-origin: right bottom;

  @media screen and (max-width: 768px) {
    transform: translateY(-60px) rotate(calc(-90deg));
  }

  a,
  button {
    margin: auto 2rem;
    display: inline-block;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 3vw;
    padding: 5px 0;
    background: none;
    border: 0;
    cursor: pointer;
    color: black;
    &:hover {
      -webkit-text-stroke: 1px black;
      color: transparent;
    }
    @media (max-width: 768px) {
      font-size: 5vw;
    }
  }
`;

export default NavStyles;
