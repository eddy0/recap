import React from 'react'
import {Button, Menu} from 'semantic-ui-react'


const SignedOutMenu = ({setAuthenticated}) => {
    return (
        <Menu.Item position={'right'}>
            <Button basic onClick={() => setAuthenticated(true)} >Login</Button>
            <Button basic style={{marginLeft: '0.5em'}}>Register</Button>
        </Menu.Item>

    )
}

export default SignedOutMenu