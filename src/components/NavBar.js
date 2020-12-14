import {Menu, Container} from 'semantic-ui-react'
import _nav from './NavBar.module.css'
import {NavLink} from 'react-router-dom'
import SignedOutMenu from './nav/SignedOutMenu'
import SignedInMenu from './nav/SignedInMenu'
import {useState} from 'react'


const NavBar = () => {
    const [authenticated, setAuthenticated] = useState(false)
    return (
        <Menu className={_nav.header} borderless>
            <Container>
                <Menu.Item as={NavLink} to={'/'} exact={true}>
                    Home
                </Menu.Item>
                <Menu.Item as={NavLink} to={'/shipper/new'} exact={true}>
                    Add Shipper
                </Menu.Item>
                <Menu.Item as={NavLink} to={'/consignee/new'} exact={true}>
                    Add Consignne
                </Menu.Item>
                {
                    authenticated &&
                    <Menu.Item as={NavLink} to={'/todo'} exact={true}>
                        Todo
                    </Menu.Item>
                }
                {
                    authenticated
                        ? <SignedInMenu setAuthenticated={setAuthenticated}/>
                        : <SignedOutMenu setAuthenticated={setAuthenticated}/>
                }
            </Container>
        </Menu>
    )
}

export default NavBar