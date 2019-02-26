import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  bottom: 0;

  label {
    display: block;
    margin-bottom: 1rem;
    color: white;
  }
  input,
  textarea,
  select {
    padding: 0.5rem;
    font-size: 1rem;
    color: ${props => props.theme.green};
    font-size: 16px;
    border: unset;
    &:focus {
      outline: 0;
      border-bottom: 2px solid ${props => props.theme.green};
    }
  }

  input#name {
    width: 70vw;
    border-bottom: 2px solid black;
    font-size: 4rem;
    color: black;
    font-size: 4rem;
    font-family: "Khand", sans-serif;
  }

  input[type="submit"] {
    width: auto;
    background: transparent;
    color: ${props => props.theme.green};
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    border: 2px solid;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    border-radius: 30%;
    border-collapse: separate;
    display: block;
    border: unset;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    label {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: transparent;
    }

    input {
      width: 100%;
      width: 100%;
      background-color: transparent;

      /* placeholder text */

      ::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: black;
        font-size: 4rem;
        font-family: "Khand", sans-serif;
      }
      ::-moz-placeholder {
        /* Firefox 19+ */
        color: black;
        font-size: 4rem;
        font-family: "Khand", sans-serif;
      }
      :-ms-input-placeholder {
        /* IE 10+ */
        color: black;
        font-size: 4rem;
        font-family: "Khand", sans-serif;
      }
      :-moz-placeholder {
        /* Firefox 18- */
        color: black;
        font-size: 4rem;
        font-family: "Khand", sans-serif;
      }

      /* end placeholder text */
    }
  }
  fieldset {
    border: 0;
    padding: 0;
    display: flex;

    &[disabled] {
      opacity: 0.5;
    }

    &[aria-busy="true"]::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export const Button = styled.button`
  width: auto;
  background: transparent;
  border: 0;
  font-size: 2rem;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  font-size: 2.5rem;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  border-radius: 30%;
  border-collapse: separate;
  display: ${props => (props.display ? "block" : "none")};
  display: block;
  position: fixed;
  bottom: 10px;
  right: 10px;
  &:focus {
    outline: unset;
  }
  span {
    margin-right: 10px;
    text-transform: uppercase;
    font-family: "Khand", sans-serif;
  }
  svg {
    height: 20px;
  }
`;

export default Form;
