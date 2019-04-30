import React from 'react'
import styled from 'styled-components'

const LoadingDiv = styled.div`
   
    width: 40px;
    height: 40px;
    background-color: transparent;
    margin: 150px auto 50px auto;
    animation: rotate 2s infinite;
    border: 5px solid transparent;
    border-radius: 50%;
    border-top: 5px solid darkturquoise;
    border-bottom: 5px solid darkturquoise;
    font-family: 'VT323', monospace;

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const LoadingText = styled.div`
    @import url('https://fonts.googleapis.com/css?family=VT323');

    background-color: transparent;
    margin: 0px auto 0px auto;
    border: 5px solid transparent;
    border-radius: 50%;
    text-align: center;
    font-family: 'VT323', monospace;
`;


export default function Loading() {
  return (
    <React.Fragment>
        <LoadingDiv/>
        <LoadingText>LOADING...</LoadingText>
    </React.Fragment>
  )
}
