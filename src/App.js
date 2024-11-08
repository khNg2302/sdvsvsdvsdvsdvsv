import "./App.css";
import { useState } from "react";

import { Modal } from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          Modal_1
        </button>
      </div>
      <Modal
        className="modal_1"
        name="modal_1"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        Modal_1
        <button
          onClick={() => {
            setOpenModal2(true);
          }}
        >
          Modal_2
        </button>
      </Modal>

      <Modal
        name="modal_2"
        open={openModal2}
        onClose={() => {
          setOpenModal2(false);
        }}
      >
        Modal_2
        <button>oki</button>
      </Modal>
    </div>
  );
}

export default App;
