import React from 'react'

function TextInput(props) {
  return (
    <input type={props.form.type}
           name={props.form.name}
           placeholder={props.form.placeholder}
           maxLength={props.form.maxLength}
    />
  )
}
export default TextInput;