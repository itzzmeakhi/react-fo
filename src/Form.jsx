import React from 'react';

const Form = ({children}) => {
    console.log(children);

    React.Children.map(children, child => {

        let childModified = React.cloneElement(child, {
            ref: child.props.name
        });
        return childModified;
    });

    console.log(children)
    return(
        <form>
            {children}
        </form>
    );
}

export { Form };