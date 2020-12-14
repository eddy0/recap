import React from 'react'
import {Dropdown, Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const SignedInMenu = ({setAuthenticated}) => {
    return (
        <Menu.Item position={'right'}>
            <Dropdown text={'admin'}>
                <Dropdown.Menu>
                    <Dropdown.Item
                        as={Link}
                        to={'/logout'}
                        icon={'power'}
                        text={'logout'}
                        onClick={() => setAuthenticated(false)}
                    />
                </Dropdown.Menu>

            </Dropdown>

        </Menu.Item>
    )
}

export default SignedInMenu