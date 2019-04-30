import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes'
import './theme/globalTheme'
import ReallySmoothScroll from 'really-smooth-scroll';
// or
// import ReallySmoothScroll from 'really-smooth-scroll';

ReallySmoothScroll.shim();
ReactDOM.render(<Routes/>, document.getElementById('root'));