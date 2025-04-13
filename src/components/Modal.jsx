import './Modal.css'

function Modal({ title, confirmDelete }) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{ title }</p>
        <div className="modal__buttons">
          <button onClick={confirmDelete} className="btn btn__cancel">Cancel</button>
          <button onClick={confirmDelete} className="btn">Confirm</button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;