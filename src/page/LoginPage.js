import React from 'react'
import {Button, Divider, Form, FormField, Header} from 'semantic-ui-react'


function LoginPage(props) {
    return (
        <div>
            <Header as={'h1'}>Please Login</Header>
            <Divider/>
            <Form>
                <Form.Field required={true}>
                    <FormField required={true}>
                        <label>username</label>
                        <input/>
                    </FormField>
                    <FormField required={true}>
                        <label>password</label>
                        <input/>
                    </FormField>
                    <FormField position={'right'}>
                        <Button primary={true} type={'sumit'}>submit</Button>
                    </FormField>
                </Form.Field>
            </Form>
        </div>
    )
}

export default LoginPage