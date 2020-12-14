import React from 'react'
// import {useField} from 'formik'
import {FormField, Label, Select, Dropdown} from 'semantic-ui-react'


const stateOptions = (data) => {
    return data.map((state, index) => ({
        key: state.text,
        text: state.text,
        value: state.value,
    }))
}


export default function MySelectInput({label, data, ...props}) {
    // const [field, meta, helpers] = useField(props)
    return (
        <FormField>
            <label>{label}</label>
            <Dropdown
                clearable
                fluid
                search
                selection
                options={stateOptions(data)}
                // value={field.value || null}
                // onChange={(e, d) => helpers.setValue(d.value)}
                // onBlur={() => helpers.setTouched(true)}
                {...props}
            />
            {/*{meta.touched && meta.error ? (*/}
            {/*    <Label basic color='red'>{meta.error}</Label>*/}
            {/*) : null}*/}
        </FormField>
    )
}