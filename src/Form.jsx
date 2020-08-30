import React, { useRef, useEffect } from 'react';

const Form = ({ children, ...props }) => {

    // const childrenRefs = useRef([]); 

    const childrenRefs = useRef([]);
    const INITIAL_STATE = {};

    useEffect(() => {
        const fieldKeys = Object.keys(childrenRefs.current);
        fieldKeys.map(field => {
            INITIAL_STATE[field] = ''
        });
    }, []);


    return(
        <form>
            {
                React.Children.map(children, (child, index) => {
                    if(child.type !== 'button') {
                        return React.cloneElement(child, {
                            ref: (ref) => (childrenRefs.current[child.props.name] = ref)
                        });
                    } else {
                        return child;
                    }
                })
            }
        </form>
    );
}

export { Form };