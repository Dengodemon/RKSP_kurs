import React from 'react'
import TextInput from "./textInput.jsx";

function TextForm (props) {
  return (
    <div>
      <p>{props.form.label}</p>
      <TextInput form={props.form}/>
    </div>
  )
}
export default TextForm;