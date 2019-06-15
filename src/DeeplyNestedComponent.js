import React, {useState} from 'react';
import Modal from './Modal'
function DeeplyNestedComponent() {
  /*
    I don't like how this component has to keep track of if the modal showing state
    Most of the cases I see throughout our app are disconnected from the modal in that
    they don't need to know when it's open or closed, they just dispatch an action to open them.
    Because this component is the one mounting it, we need to pass a callback in to allow the modal to close itself
  */

  const [showing, setShowing] = useState(false)
  function showModal() {
    setShowing(true)
  }
  function closeModal() {
    setShowing(false)
  }

  return (
    <>
      {showing && (
        <Modal onCloseCallback={closeModal} />
      )}
      <button onClick={showModal}>Show Modal</button>

    </>
  );
}

export default DeeplyNestedComponent;
