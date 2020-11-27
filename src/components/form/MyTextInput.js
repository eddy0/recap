import React from 'react';
import {FormField} from "semantic-ui-react";

const MyTextInput = ({label,required, ...props}) => {
    return (
        <FormField required={required} >
            <label>{label}</label>
            <input {...props}/>
        </FormField>
    );
};

export default MyTextInput;