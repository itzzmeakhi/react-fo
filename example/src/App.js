import React from 'react'

import { Form, InputField } from 'react-formsio'
import 'react-formsio/dist/index.css'

const App = () => {
  return(
    <Form>

      <InputField
        type = 'text'
        name = 'userName'
        placeholder = 'Your Name'
        autocomplete = 'off' />

      <InputField
        type = 'email'
        name = 'userEmail'
        placeholder = 'Your Email' 
        autocomplete = 'off' />

      <InputField
        type = 'password'
        name = 'userPassword'
        placeholder = 'Your Password' 
        autocomplete = 'off' />

      <button type = 'submit'> Submit </button>

    </Form>
  )
}

export default App;
