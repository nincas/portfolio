import React, { Component } from 'react';
import './Index.css'
import Navbar from './partials/navbar'
import styled from 'styled-components'

const ContentDiv = styled.div`
	font-family: 'VT323', monospace;
	font-size: 80px;
	font-weight: bold;
	text-align: center;
	padding: 10% 0;
	width: 50%;
	align-content: center;
`;

const TextDiv = styled.div`
	height: 30vh;
	width: 100%;
	text-align: left;
	padding-left: 25px;
	margin-left: 20%;
	border-left: 20px solid white;
	background-color: transparent;
	
	border-radius: 10%;
	align-content: center;
	color: white;
`;

const SpanText = styled.span`
	font-size: 45px;
	color: darkturquoise;
	font-weight: normal;
	align-content: center;
`;

const SpanText2 = styled.span`
	font-size: 30px;
	color: darkturquoise;
	font-weight: normal;
	padding: 0 !important;
	border-top: 2px solid azure;
`;

const HeroImage = styled.div`
	width: 100%;
	height: 100vh;
	background-image: url('${require('../assets/images/bg-image.jpg')}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	display: flex;
	justify-content: right;
	align-content: center;
`;

class App extends Component {
  render() {
    return (
      //  <Link to="/home">Home</Link>
      <React.Fragment>
        <Navbar/>
		<HeroImage>
			<ContentDiv>
			<TextDiv>
				<SpanText>Welcome!</SpanText>
				<br/>
				SOFTWARE DEVELOPER
				<br/>
				<SpanText2>JavaScript, PHP, Python more..</SpanText2>
			</TextDiv>
			</ContentDiv>
		</HeroImage>
      </React.Fragment>
    );
  }
}

export default App;
 