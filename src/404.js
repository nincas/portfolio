import React from 'react'
import Navbar from './Pages/partials/navbar'
import styled from 'styled-components'

const ErrorStyled = styled.div`
    margin: auto;
    padding: 30vh 0px;
    color: red;
    text-align: center;
    font-family: 'VT323', monospace;
    font-size: 30px;
    font-weight: bold;
`;

export default function ErrorPage() {
  return (
    <div>
      <Navbar/>
      <ErrorStyled>
          404 PAGE NOT FOUND
      </ErrorStyled>
    </div>
  )
}
