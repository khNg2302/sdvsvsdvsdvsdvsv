import { useCallback, useState } from "react";
import { Input } from "./Input";

export const OptionsInput = ({ onChange, onSelect, onSet }) => {
    const [options, setOptions] = useState([]);

    const handleSet = useCallback((value)=>{
      console.log(value)
      if(!value){
        const emptyOption = []
        setOptions([...emptyOption])
      }

      onSet && onSet(value)
    },[onSet])
  
    const handleChange = useCallback(async(value) => {
      if(value) {
        console.log('search')
        const responseOptions = await onChange && onChange(value)

        setOptions([...responseOptions]);
      }
    }, [onChange]);

  const renderOptions = useCallback(() => {
    return options?.map((option) => {
      return (
        <div
          style={{
            width: "100%",
            padding: "0px 4px",
            textAlign: "left",
          }}
          key={option.id}
          onClick={() => {
            onSelect(option);
          }}
        >
          {option.label}
        </div>
      );
    });
  }, [options, onSelect]);

  return (
    <div style={{ position: "relative" }}>
      <Input onChange={handleChange} onSet={handleSet} />
      {options?.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 4px)",
            border: "1px solid",
            left: 0,
            right: 0,
          }}
        >
          {renderOptions()}
        </div>
      )}
    </div>
  );
};
