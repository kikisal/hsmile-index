import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginBox from './views/LoginBox';

export default class App extends React.Component {
  render() {
    return (
      <LoginBox />
    );
  }
}