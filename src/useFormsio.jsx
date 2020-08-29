import React from 'react';

const useFormsio = (WrappedComponent) => (props) => {
    return (
      <div>
        <h1> Wrapped Component </h1>
        <WrappedComponent {...props}>
          {props.children}
        </WrappedComponent>
      </div>
    )
  }

export { useFormsio };