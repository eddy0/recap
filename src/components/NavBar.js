import {Menu, Container, Button} from 'semantic-ui-react'
import _nav from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <Menu className={_nav.header}  borderless>
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
                <Menu.Item position={'right'}>
                    <Button basic >Login</Button>
                    <Button basic style={{marginLeft: '0.5em'}}>Logout</Button>
                </Menu.Item>

            </Container>


        </Menu>
    )
}

export default NavBar