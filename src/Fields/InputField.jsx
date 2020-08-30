import React, { forwardRef } from 'react';

const InputField = forwardRef(( { autocomplete, ...props }, ref ) => {

    console.log(ref);

    return(
        <React.Fragment>
            <input
                { ...props }
                autoComplete = { autocomplete }
                ref = { ref } />
        </React.Fragment>
    );

});

export { InputField };