import React from 'react'
import Portal from './Portal'

export default ({onCloseCallback}) => (
  <Portal>
    <div>
      <p>A bunch of modal content</p>
      <button onClick={onCloseCallback}>Close</button>
    </div>
  </Portal>
)