import "./App.css";
import { useCallback, useState } from "react";

import { Modal } from "./components/Modal";
import { Input } from "./components/Input";
import { OptionsInput } from "./components/OptionsInput";

function App() {
  const [open, setOpen] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  const handleSet = useCallback((value) => {
    console.log(value);
  }, []);

  const handleSelect = useCallback((options) => {
    console.log(options);
  }, []);

  const handleChange = useCallback((value) => {
    const searchedOptions = !value
      ? []
      : [
          {
            id: 1,
            label: "Option 1",
            value: "a",
          },
          {
            id: 2,
            label: "Option 2",
            value: "b",
          },
        ];

    return searchedOptions;
  }, []);
  return (
    <div className="App">
      <Input
        onChange={(value) => {
          console.log(value);
        }}
      />
      <OptionsInput
        onSelect={handleSelect}
        onChange={handleChange}
        onSet={handleSet}
      />
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
