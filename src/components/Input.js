import { debounce } from "lodash";
import { useRef, useState } from "react";

// composition

export const Input = ({ onChange, onSet }) => {
  const inputRef = useRef(null);
  const isComposing = useRef(false);

  const changeValue = debounce((value) => {
    onChange && onChange(value);
  }, 300);

  const handleOnChange = (e) => {
    if (!isComposing.current) {
      onSet && onSet(e.target.value);
      changeValue(e.target.value);
    }
  };

  const handleComposingEnd = () => {
    onSet && onSet(inputRef.current.value);
    changeValue(inputRef.current.value);
  };

  const handleClear = () => {
    inputRef.current.value = "";
    isComposing.current = false;
    onSet && onSet("");
    changeValue("");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "2px",
          border: "1px solid",
          padding: "2px 4px",
          borderRadius: "3px",
        }}
      >
        <input
          style={{ border: "0px", outline: "none", flex: 1 }}
          ref={inputRef}
          onChange={handleOnChange}
          onCompositionStart={() => {
            isComposing.current = true;
          }}
          onCompositionEnd={handleComposingEnd}
        />
        <button
          style={{
            background: "transparent",
            border: 0,
          }}
          onClick={handleClear}
        >
          x
        </button>
      </div>
    </>
  );
};
