import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Portal from './Portal'

export default ({onCloseCallback}) => (
  <Portal>
    <div>
      <p>A bunch of content</p>
      <button onClick={onCloseCallback}>Close</button>
    </div>
  </Portal>
)