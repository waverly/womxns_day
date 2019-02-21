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
  left: 0;
  bottom: 0;
  background: black;
  z-index: 10;
  height: 100px;

  label {
    display: block;
    margin-bottom: 1rem;
    color: white;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    color: ${props => props.theme.green};
    font-size: 16px;
    &:focus {
      outline: 0;
      border-bottom: 2px solid ${props => props.theme.green};
    }
  }
  button,
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
      border-bottom: 2px solid #00ff00;

      /* placeholder text */

      ::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: #00ff00;
        font-size: 14px;
      }
      ::-moz-placeholder {
        /* Firefox 19+ */
        color: #00ff00;
        font-size: 14px;
      }
      :-ms-input-placeholder {
        /* IE 10+ */
        color: #00ff00;
        font-size: 14px;
      }
      :-moz-placeholder {
        /* Firefox 18- */
        color: #00ff00;
        font-size: 14px;
      }

      /* end placeholder text */
    }
    button {
      width: 150px;
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

export default Form;
