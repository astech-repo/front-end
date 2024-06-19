import React from "react";
import InputMask from "react-input-mask";
import { FormValues } from "./page";

interface FormInputProps {
  label: string;
  name: keyof FormValues;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  wdth: string;
  list?: string;
  mask?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type,
  value,
  onChange,
  required,
  wdth,
  list,
  mask,
}) => {
  let inputElement = (
    <input
      type={type}
      className="form__field"
      placeholder={label}
      name={name as string}
      id={name as string}
      value={value}
      onChange={onChange}
      required={required}
      list={list}
    />
  );

  if (mask === "telefone") {
    inputElement = (
      <InputMask
        mask="+99 (99) 9 9999-9999"
        value={value}
        onChange={onChange}
      >
        {(inputProps: any) => (
          <input
            {...inputProps}
            type={type}
            className="form__field"
            placeholder={label}
            name={name as string}
            id={name as string}
            required={required}
            list={list}
          />
        )}
      </InputMask>
    );
  } else if(mask === "cep"){
    inputElement = (
      <InputMask
        mask="99999-999"
        value={value}
        onChange={onChange}
      >
        {(inputProps: any) => (
          <input
            {...inputProps}
            type={type}
            className="form__field"
            placeholder={label}
            name={name as string}
            id={name as string}
            required={required}
            list={list}
          />
        )}
      </InputMask>
    );
  }

  return (
    <div className={`form__group field ${wdth}`}>
      {inputElement}
      <label htmlFor={name as string} className="form__label">
        {label}
      </label>
    </div>
  );
};
