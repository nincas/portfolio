import React from 'react'
import Navbar from './partials/navbar'
import styled from 'styled-components'

const StyledDiv = styled.div`
    font-family: 'VT323', monospace;
    font-size: 24px;
    text-align: center;
    color: white;
`;

export default function Contact() {
  return (
    <React.Fragment>
        <Navbar/>
        <StyledDiv>This is contact</StyledDiv>
    </React.Fragment>
  )
}
