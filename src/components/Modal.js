import { useContext, useEffect } from "react";
import { StoreContext } from "../store/Store";
import { Overlay } from "./Overlay";

export const Modal = ({ children, className, name, open, onClose }) => {
  const { currentFloat, closeFloat, setNewFloat, addMoreFloat } =
    useContext(StoreContext);

  useEffect(() => {
    if (open) {
      if (currentFloat.length > 0) {
        addMoreFloat(name);
      } else {
        setNewFloat(name);
      }
    } else {
      if (currentFloat.length > 0) {
        closeFloat(name);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (currentFloat.length === 0 && open) {
      onClose();
      closeFloat(name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFloat]);
  return (
    <>
      {currentFloat.includes(name) && (
        <div className="modal" style={{ zIndex: currentFloat.indexOf(name) }}>
          <Overlay
            onClick={() => {
              closeFloat(name);
            }}
          />
          <div className={`modal_content ${className}`}>
            <button
              onClick={() => {
                onClose();
              }}
            >
              Close
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
