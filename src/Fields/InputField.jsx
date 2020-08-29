import React from 'react';

const InputField = ({type, autocomplete, ...props}) => {

    return(
        <React.Fragment>
            <input
                {...props}
                autoComplete = {autocomplete} />
        </React.Fragment>
    );
}

export { InputField };