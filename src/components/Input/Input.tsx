// Libs
import React, { ChangeEvent, FocusEvent, RefObject } from 'react'

// Styles
import './Input.scss'

interface IInputProps {
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
  onBlurHandler?: (e: FocusEvent<HTMLInputElement>) => void
  wrapperClass: string
  htmlFor?: string
  labelName: string
  value?: string
  id?: string
  labelClass?: string
  inputClass?: string
  type: string
  required?: boolean
  defaultInputValue?: string
  name?: string
  inputRef?: RefObject<HTMLInputElement>
}

const Input: React.FC<IInputProps> = ({
  wrapperClass,
  htmlFor,
  labelName,
  value,
  id,
  labelClass,
  inputClass,
  type,
  required,
  onChangeHandler,
  onBlurHandler,
  defaultInputValue,
  name,
  inputRef,
}) => {
  return (
    <div className={wrapperClass}>
      <label className={labelClass} htmlFor={htmlFor}>
        {labelName}
      </label>
      <input
        id={id}
        defaultValue={defaultInputValue}
        name={name}
        className={inputClass}
        type={type}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        value={value}
        required={required}
        ref={inputRef}
      />
    </div>
  )
}

export default Input
