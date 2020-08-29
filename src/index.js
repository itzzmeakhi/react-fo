import React from 'react';
import styles from './styles.module.css';

import { Form } from './Form';
import { useFormsio } from "./useFormsio";
import { InputField } from './Fields/InputField';


export { 
          Form,
          InputField,
          useFormsio 
       };



export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
