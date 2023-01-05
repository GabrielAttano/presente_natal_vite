import styled, { createGlobalStyle } from 'styled-components'
import * as C from '../config/colors'
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      outline: none;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
      color: ${C.black};
  }
  
  html, body, #root {
    height: 100%;
  }
  button {
    cursor: pointer;
    background: none;
    border: none;
    padding: 5px 0px;
  }

  
  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    font-weight: 500;
    
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    font-weight: 500;
  }
  
`;